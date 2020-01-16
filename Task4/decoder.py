from base64 import b64encode
from os import urandom
from ctypes import CDLL
import string
import codecs
key = ""
ciphertext="2a2138440b1c233d080d072b29441c1b2b6d250c052f23070d176e152b3a"
plaintext=""
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
    global plaintext
    get_key()
    a=bytes( key , 'utf-8')
    hex_key = codecs.encode(a,"hex")
    print(hex_key)
    print(len(key))
    key_list = [hex_key[i] + hex_key[i+1] for i in range(0,len(hex_key),1)]
    print (key)
    print(key_list)
    for i in range(len(x)):
        plaintext += chr(ord(x[i]) ^key_list[i%5])
    return plaintext
print(xor_encrypt(ciphertext))
