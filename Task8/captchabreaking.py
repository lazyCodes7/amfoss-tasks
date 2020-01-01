import pytesseract
from PIL import Image
img=Image.open('tess1.png')
text=pytesseract.image_to_string(img)
s=0
d=1
y=list(text)
for i in range(len(y)):
    if "+" in text:
        if(y[i]!="+"):
            j=int(y[i])
            s=s+j
    elif "-" in text:
        if(y[i]!="-"):
            j=int(y[i])
            s=j-s
    elif "*" in text:
        if(y[i]!="*"):
            j=int(y[i])
            d=j*d
            s=d
    elif "/" in text:
        if(y[i]!="/"):
            j=int(y[i])
            d=1/(d*j)
            s=d            
print(s)
