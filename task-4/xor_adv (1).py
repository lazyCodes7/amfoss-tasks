from os import urandom
from ctypes import CDLL
import string
import codecs
key = ""
ciphertext=""
def get_key():
    global key
    c = urandom(1)
    d=codecs.decode(c , 'latin1')
    if len(key)!=5:
        if d not in string.ascii_lowercase and d not in string.ascii_uppercase :
            get_key()
        else:
            key += d
            
            get_key()
    
def xor_encrypt(x):
    global key
    global ciphertext
    get_key()
    s=bytes(key , 'utf-8')
    hex_key = codecs.encode(s,"hex")
    key_list = [hex_key[i]+hex_key[i+1] for i in range(0,len(hex_key),2)]
    
    for i in range(len(x)):
        ciphertext += chr(ord(x[i]) ^ int(str(key_list[i%5]), 16))
    return(ciphertext)
    
y=input()
print(xor_encrypt(y))
    
