import requests

url = 'http://localhost:3000'
myobj = {
    'sensor': 'a', 
    'count': 1,
    'timestamp': 'YYYY-MM-DD-HH-SS'
}

x = requests.post(url, json = myobj)

print(x.text)