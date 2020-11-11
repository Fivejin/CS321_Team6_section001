import bs4
from urllib.request import Request,urlopen
from bs4 import BeautifulSoup
import re
import csv
import json
l=["https://www.sephora.com/shop/wrinkle-cream-wrinkle-remover?ref=100103,100118",
  "https://www.sephora.com/shop/wrinkle-cream-wrinkle-remover?ref=100103,100119",
  "https://www.sephora.com/shop/dark-spot-remover?ref=100118,100103",
  "https://www.sephora.com/shop/dark-spot-remover?ref=100103,100119",
  "https://www.sephora.com/shop/acne-treatment-blemish-remover?ref=100103,100118",
  "https://www.sephora.com/shop/acne-treatment-blemish-remover?ref=100119,100103",
  "https://www.sephora.com/shop/skin-brighteners-dull-skin-treatments?ref=100118,100103",
  "https://www.sephora.com/shop/skin-brighteners-dull-skin-treatments?ref=100119,100103",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100118,100103",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100118,100103,100104",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100118,100102",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100104,100119",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100102,100119",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100102,100120",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100103,100119",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100103,100121",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100101,100119",
  "https://www.sephora.com/shop/dry-skin-treatment?ref=100101,100120"
  ]

str1 = ""
name = ""
cost= ""
finalStr = ""
i=0
with open("product_data8.csv", "a") as csv_file:
	writer = csv.writer(csv_file)  
	for l1 in l:
		req = Request(l1,headers={'User-Agent': 'Mozilla/5.0'})
		
		page = urlopen(req).read()
		#html_bytes = page.read()
		
		html = page.decode('utf-8')
		soup = BeautifulSoup(html, 'html.parser')
		for ele in (soup.findAll("div",{"class":"css-12egk0t"})[0:5]):
		
			str2 = (str(ele.text))
			
			str2 = str2.replace('Quick Look','')
			str3 = str2[:-4]
			str4 = str2[-4:]
			name = str(str2.split('$')[0])
			finalStr += "Name: "
			finalStr += name
			finalStr += "<br>"
			cost = str(str3.split(name)[1])
			finalStr += "Cost: "
			finalStr += cost
			finalStr += "<br>"
			ratings = str4
			finalStr += "Ratings: "
			finalStr += ratings
			finalStr += ","
			writer.writerow([name,cost,ratings])

myArray = finalStr.split(',')
a1 = myArray[0:5]
a2 = myArray[5:10]
a3 = myArray[10:15]
a4 = myArray[15:20]
a5 = myArray[20:25]
a6 = myArray[25:30]
a7 = myArray[30:35]
a8 = myArray[35:40]
a9 = myArray[40:45]
a10 = myArray[45:50]
a11 = myArray[50:55]
a12 = myArray[55:60]
a13 = myArray[60:65]
a14 = myArray[65:70]
a15 = myArray[70:75]
a16 = myArray[75:80]
a17 = myArray[80:85]
a18 = myArray[85:90]

with open('myProductsArray.js','w') as final_file:
	final_file.write('var myProducts1 = %s;' % json.dumps(a1))
	final_file.write('var myProducts2 = %s;' % json.dumps(a2))
	final_file.write('var myProducts3 = %s;' % json.dumps(a3))
	final_file.write('var myProducts4 = %s;' % json.dumps(a4))
	final_file.write('var myProducts5 = %s;' % json.dumps(a5))
	final_file.write('var myProducts6 = %s;' % json.dumps(a6))
	final_file.write('var myProducts7 = %s;' % json.dumps(a7))
	final_file.write('var myProducts8 = %s;' % json.dumps(a8))
	final_file.write('var myProducts9 = %s;' % json.dumps(a9))
	final_file.write('var myProducts10 = %s;' % json.dumps(a10))
	final_file.write('var myProducts11 = %s;' % json.dumps(a11))
	final_file.write('var myProducts12 = %s;' % json.dumps(a12))
	final_file.write('var myProducts13 = %s;' % json.dumps(a13))
	final_file.write('var myProducts14 = %s;' % json.dumps(a14))
	final_file.write('var myProducts15 = %s;' % json.dumps(a15))
	final_file.write('var myProducts16 = %s;' % json.dumps(a16))
	final_file.write('var myProducts17 = %s;' % json.dumps(a17))
	final_file.write('var myProducts18 = %s;' % json.dumps(a18))