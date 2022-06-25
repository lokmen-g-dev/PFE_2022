
from asyncio import wait
from distutils.log import debug

import mimetypes
from telnetlib import STATUS
import time
from unicodedata import name
from urllib import response
from bson import ObjectId
from flask import Flask ,Response, jsonify
from pymongo  import MongoClient
import pyFortiManagerAPI
import json

#recuperation de base
client = MongoClient(host="localhost", port=27017)
db = client["test"]
print(db)
coll_name = "ajoutes"
coll = db[coll_name]
app = Flask (__name__)


#Members APT Route
for req in coll.find({},{ 'name': 0 , 'user':0,  '_id':0, 'password':0 ,'__v': 0 }):


    print(req)


    ip2 = str(req)


    ip1 = ip2.replace("{'ip': '", "")
    ip = ip1.replace("'}", "")
    print(ip1)


#recuperation username
for re in coll.find({},{ 'name': 0 , 'ip':0,  '_id':0, 'password':0 ,'__v': 0 }):


    print(re);
use = str(re)
user1 = use.replace("{'user': '", "")
user = user1.replace("'}", "")
print (user)
#recuperation password

for r in coll.find({},{ 'name': 0 , 'ip':0,  '_id':0, 'user':0 ,'__v': 0 }):


    print(r)
pas = str(r)
pas1 = pas.replace("{'password': '", "")
password = pas1.replace("'}", "")
print(password)

######### export database fortimanager
fmgr = pyFortiManagerAPI.FortiManager(host= ip, username=user, password=password, verify=False)

output = fmgr.get_devices()
with open("test.json", "w") as myfile:
    myfile.write(json.dumps(output, indent=4))
    print("export successful")

with open('test.json', 'r') as myfile:
    data_dict = json.load(myfile)
    print(data_dict['result'])
print(type(data_dict['result']))
tab = 100 * [0]
tab=[]
#delete tous le fortigate

db = client["test"]
coll_name = "ips"
dbResponse = db[coll_name].delete_many({})
db = client["test"]
coll_name = "fgs"
dbResponse = db[coll_name].delete_many({}) 
db = client["test"]
coll_name = "policies"
dbResponse = db[coll_name].delete_many({}) 
db = client["test"]
coll_name = "routes"
dbResponse = db[coll_name].delete_many({})
db = client["test"]
coll_name = "sdwans"
dbResponse = db[coll_name].delete_many({})
  
for x in data_dict['result']:
    for y in range (len(x['data'])):
     A = x['data'][y]['ip']
     B = x['data'][y]['name']
     C = x['data'][y]['mgmt_if']
     D = x['data'][y]['tunnel_ip']
     if y==0:
        E ="p5Hw7jGwhdtsprx3yshq5wNbr6mGNc"
     elif y==1:
        E="cds5sNkp5pc7j07ch6w67q3qNn3r00"
     else:
        E="8w9xqH6mz63bH7byh3th6m8Gfpc8q3"
     tab.append([A, B , C , E])

print (tab)

for i in range(len(tab)):
    Ajouts = {"name":tab[i][1], "ip": tab[i][0],"mgmt_if": tab[i][2]}
    db = client["test"]
    coll_name = "ips"
    dbResponse = db[coll_name].insert_one(Ajouts)
    print(dbResponse.inserted_id)


time.sleep(2)
#logiii fortigate


import requests

for i in range(len(tab)):
    Ajouts = {"name":tab[i][1], "ip": tab[i][0],"mgmt_if": tab[i][2]}
    url1= "http://"
    ip01= tab[i][0]
    chema= "/logincheck"
  

  
    #les policy de fortigate
    chema_policy="/api/v2/cmdb/firewall/policy?access_token="
    url = (url1+ip01+chema_policy+tab[i][3])
    print(url)
    
    payload = ""
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload , verify=False)

    print(response.text)

    #output= response
    #Get Policy

    json_object = json.loads(response.text)
    print(type(json_object))
    x="Policy"f"{tab[i][1]}"".json"
    with open(x, "w") as myfile:
        myfile.write(json.dumps(json_object, indent=4))
        print("export successful")

    #Get Interface 
    chema_policy="/api/v2/cmdb/system/interface?access_token="
    url = (url1+ip01+chema_policy+tab[i][3])
   
    payload = ""
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload , verify=False)

    print(response.text)
   

    json_object = json.loads(response.text)
    print(type(json_object))
    x="Interface"f"{tab[i][1]}"".json"
    with open(x, "w") as myfile:
        myfile.write(json.dumps(json_object, indent=4))
        print("export successful")
    
   
 
    y="Interface"f"{tab[i][1]}"".json"
    print("hdhhdh",y,tab[i][0])
    with open(y, 'r') as myfile:
       data_dict = json.load(myfile)
    print(data_dict['results'])
    print(type(data_dict['results']))   
    for x in data_dict['results']:
       
        A1 = x['name']
        B2 = x['ip']
        C2 = x['allowaccess']
        C3 = tab[i][1]
        D2 = tab[i][0]
        print(D2)
        print(A1 ,B2 , C2)
        Ajouts = {"name":A1, "ip": B2,"mgmt_if": C2 , "ip_fortigate": D2 , "nom_fortigate": C3}
        db = client["test"]
        coll_name = "fgs"
        dbResponse = db[coll_name].insert_one(Ajouts)
        print(dbResponse.inserted_id)
    ##GET SDWAN
    chema_policy="/api/v2/cmdb/system/sdwan/zone?access_token="
    url = (url1+ip01+chema_policy+tab[i][3])
   
    payload = ""
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload , verify=False)

    print(response.text)
    json_object = json.loads(response.text)
    print(type(json_object))
    x="SD-WAN"f"{tab[i][1]}"".json"
    with open(x, "w") as myfile:
        myfile.write(json.dumps(json_object, indent=4))
        print("export successful")
     
     ##GET Static
    chema_policy="/api/v2/cmdb/router/static/?access_token="
    url = (url1+ip01+chema_policy+tab[i][3])
   
    payload = ""
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload , verify=False)

    print(response.text)
    json_object = json.loads(response.text)
    print(type(json_object))
    x="Route Static"f"{tab[i][1]}"".json"
    with open(x, "w") as myfile:
        myfile.write(json.dumps(json_object, indent=4))
        print("export successful")
    # policy
    y="Policy"f"{tab[i][1]}"".json"
    with open(y, 'r') as myfile:
       data_dict = json.load(myfile)
    print(data_dict['results'])
    print(type(data_dict['results']))   
    for x in data_dict['results']:
       
        A1 = x['name']
        B2 = x['action']
        C1 = x['dstaddr'][0]['name']
        C2 = x['srcaddr'][0]['name']
        C3 = x['srcintf'][0]['name']
        C4 = x['dstintf'][0]['name']


        D2 = tab[i][0]
        E1 = x['nat']
        print(D2)
        print(A1 ,B2 , C1,C2,C3,C4,D2,E1)
        Ajouts = {"name":A1, "action": B2,"Dstaddr": C1 , "srcaddr":C2, "srcintf": C3,"dstintf":C4,"ip_fortigate":D2,"NAT":E1}
        db = client["test"]
        coll_name = "policies"
        dbResponse = db[coll_name].insert_one(Ajouts)
        print(dbResponse.inserted_id)
     #roooute
    y="Route Static"f"{tab[i][1]}"".json"
    with open(y, 'r') as myfile:
       data_dict = json.load(myfile)
    print(data_dict['results'])
    print(type(data_dict['results']))   
    for x in data_dict['results']:
       
        A1 = x['status']
        B2 = x['dst']
        C1 = x['gateway']
   


        D2 = tab[i][0]
        print(D2)
        print(A1 ,B2 , C1,C2,C3,C4,D2,E1)
        Ajouts = {"status":A1, "dst": B2,"gateway": C1 ,  "ip_fortigate":D2}
        db = client["test"]
        coll_name = "routes"
        dbResponse = db[coll_name].insert_one(Ajouts)
        print(dbResponse.inserted_id)
       #SDWAN
    y="SD-WAN"f"{tab[i][1]}"".json"
    with open(y, 'r') as myfile:
       data_dict = json.load(myfile)
    print(data_dict['results'])
    print(type(data_dict['results']))   
    for x in data_dict['results']:
            
 
       
        A1 = x['name']
        B2 = x['q_origin_key']
        C1 = x['service-sla-tie-break']
   


        D2 = tab[i][0]
        print(D2)
        print(A1 ,B2 , C1,C2,C3,C4,D2,E1)
        Ajouts = {"zone ":A1, "Members": B2,"Memberss": C1 ,  "ip_fortigate":D2}
        db = client["test"]
        coll_name = "sdwans"
        dbResponse = db[coll_name].insert_one(Ajouts)
        print(dbResponse.inserted_id)
   

# recuperation adresse ip
   

    


 
@app.route("/delet", methods=["DELETE"])
def delete_user():
    
        return Response(
        response= json.dumps(
          {"message": "sorry connot deleted user"}),
        status=500,
        )

    
app.run(host='localhost',port=8000, debug=True) 