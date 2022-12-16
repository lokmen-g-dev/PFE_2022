const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://http://192.168.137.134:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'SonarQube',
	    'sonar.projectKey':'SonarQube',
	    'sonar.login': 'sqp_5a7e798cbe57587d33ae762b7c81f8e6d459ffc1',
	    'sonar.login': 'admin',
	    'sonar.password': '123456789',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
