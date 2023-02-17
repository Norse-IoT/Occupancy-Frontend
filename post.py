import requests

url = 'http://localhost:3000'
myobj = {
    'sensor': 'a', 
    'count': 1
}

x = requests.post(url, json = myobj)

print(x.text)