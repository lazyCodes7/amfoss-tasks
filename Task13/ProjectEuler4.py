def ispalindrome(num):
    return (str(num)==str(num)[::-1])
def findno(num1):
    x=[]
    for i in range(999,99,-1):
        for j in range(999,99,-1):
            s=i*j
            if(s<num1):
                if(ispalindrome(s)==True):
                    x.append(s)
    return(max(x))
    
n=int(input())
for i in range(n):
    y=int(input())
    print(findno(y))
