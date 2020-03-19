from bs4 import BeautifulSoup
import requests

page = requests.get("https://www.fcbarcelona.com/en/football/first-team/schedule")

soup = BeautifulSoup(page.text, 'html.parser')

text = soup.find(class_='fixture-result-list__fixture-date')

date = text.contents[0]

file = open("GameData.txt","w")
file.write("<h1>")
file.write(date)
file.write("</h1>")

