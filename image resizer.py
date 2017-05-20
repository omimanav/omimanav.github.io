#
#
# playground.py
# 
#
#
# Created by anonomi
#
#
######
import os, sys, hashlib
from PIL import Image
######

for filename in os.listdir('.'):
	if '.jpg' in filename:
		img = Image.open(filename)
		ratio = float(img.size[0]) / float(img.size[1])
		print ratio
		img = img.resize((int(600 * ratio), 600), Image.ANTIALIAS)
		img.save(filename)