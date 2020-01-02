#include <iostream>

using namespace std;

int main()
{
    int x;
    int y;
    int z;
    int diff = 0;
    int sum[1]={0};
    int sum1[1]={0};
    cin>>x;
    int a[x][x];
    for(y=0;y<x;y++){
        for(z=0;z<x;z++){
             cin>>a[y][z];
    }
    }
    for(int i=0;i<x;i++){
         sum[0]=sum[0]+a[i][i];
    }
    for(int j=1;j<=x;j++)
    {
        sum1[0]=sum1[0]+a[j-1][x-j];
    }
    diff=sum[0]-sum1[0];
    if(diff<0){
        diff=0-diff;
    }
    cout<<diff;
}

