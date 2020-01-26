x=int(input())
y=0
for i in range(x):
    s=input()
    if(s=="++X" or s=="X++"):
        y=y+1
    elif(s=="--X" or s=="X--"):
        y=y-1
print(y)
