import bs4
from urllib.request import Request,urlopen
from bs4 import BeautifulSoup
import re
import csv
l=["https://www.sephora.com/shop/acne-treatment-blemish-remover?ref=100042,100119,100101","https://www.sephora.com/shop/acne-treatment-blemish-remover?ref=100119,100039,100102",
   "https://www.sephora.com/shop/acne-treatment-blemish-remover?ref=100025,100119,100101","https://www.sephora.com/shop/acne-treatment-blemish-remover?ref=100119,100101,100045",
   "https://www.sephora.com/shop/acne-treatment-blemish-remover?ref=100119,104001,100103"]
l2 = ["Acne/Blemishes","Fine lines/Wrinkles", "dryness", "Discoloration/Uneven Skin tone","Brightening"] 
str1 = ""
name = ""
cost= ""
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
			cost = str(str3.split(name)[1])
			ratings = str4
			str1 += (str2+', ')
			writer.writerow([name,cost,ratings])
			
	#print('\n')
	print(str1)

	