#include <iostream>

using namespace std;

int main()
{
   int c[2]={0,0};
   int a[3];
   int b[3];
   int d[2][3];
   for(int k=0;k<2;k++){
        for (int j=0;j<3;j++){
                     cin>>d[k][j];
            if(k==0){
              a[j]=d[k][j];
          }
            else{
              b[j]=d[k][j];
            }
        }
    }
   for(int s=0;s<3;s++){
    if(a[s]>b[s]){
            c[0]=c[0]+1;
    }
    else if(a[s]<b[s]){
    c[1]=c[1]+1;
            }
   }
   cout<<c[0]<<" "<<c[1];
   }

