package main


import (

	"flag"
	"fmt"
	"github.com/dghubble/go-twitter/twitter"
	"github.com/dghubble/oauth1"
	"os"
)

func main() {
	var use string
	var count int
	fmt.Println("Enter Valid Username")
	fmt.Scanln(&use)
	s :=flag.String("TwitterUserName",use,"Usernames")
	flag.Parse()
	config := oauth1.NewConfig("iDkjFuVNHi8sB5KU3QvmReItf" ,  "rbrB7fgVBtr2DKAEOknMHJDgnmBIY5OhOFmFLVd5ZvmL2kvXgP")
	token := oauth1.NewToken("1215581351035826176-u7OzDyh0ftK1ljXmZsFEEZ12LhO6Fj", "K2wqFPZ0swc0CvA3JqjUKTxVy3tFTHNd2xBIEV0lQr8a1")
	httpClient := config.Client(oauth1.NoContext, token)
	client := twitter.NewClient(httpClient)
	f, err:= os.Create("test.txt")

	params := &twitter.FollowerListParams{ScreenName: *s}
	followers, resp, err:= client.Followers.List(params)
	for _, value:= range followers.Users{
		count++

	}
	
	f.Close()
}
