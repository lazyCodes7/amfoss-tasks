#include <iostream>
#include <cmath>
#include <cstdlib>
#include <cstring>
using namespace std;

int main()
{
int x;
cin>>x;
int k =x;

for(int i=0;i<x;i++){
    while(k>i+1){
        cout<<" ";
        k=k-1;
    }
    for(int j=0;j<=i;j++){
        cout<<"#";
    }
    cout<<"\n";
    k=x;
}
}

tai
