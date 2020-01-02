#include <iostream>

using namespace std;

int main()
{

    int n;
    cin>>n;
    int a[n];
    int sum=0;
    for(int i=0;i<n;i++){
        cin>>a[i];
    }
int max=a[0];
for(int i=0;i<n;i++){


if(a[i]>max){
 max=a[i];
}
}
for(int i=0;i<n;i++){
        if(a[i]>=max){
        sum=sum+1;
}
}
cout<<sum;
}
