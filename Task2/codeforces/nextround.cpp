#include <iostream>

using namespace std;

int main()
{
    int a,k,s;
    s=0;
    cin>>a>>k;
    int b[a];
    for(int i=0;i<a;i++){
        cin>>b[i];
    }
    for(int i=0;i<a;i++){
        if(b[i]>0){
            if(b[i]>=b[k-1]){
                    s=s+1;

            }

        }

    }

        cout<<s;



}
