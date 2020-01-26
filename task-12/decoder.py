import string
import codecs
upper = string.ascii_uppercase
lower = string.ascii_lowercase
digits = string.digits
c=[]
b=''
x=bytearray.fromhex("667b6c7d63677f3c733c7f323c3c7b333e7b3c3c7f3e7b333e3232393c3d3268").decode()
for i in x:
    c.append(chr(ord(i)^10))
for i in c:
        if i.isupper() is True:
            b=b+upper[(upper.index(i)-3)%26]
        elif i.islower() is True:
           b=b+lower[(lower.index(i)-3)%26]
        elif i.isdigit() is True:
           b=b+digits[(digits.index(i)-3)%10]
print(b)

