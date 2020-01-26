require 'nokogiri'
require 'httparty'
require 'byebug'

def scraper
    	url="https://www.google.com/search?q=Linux&oq=li&aqs=chrome.1.69i57j69i59j35i39j69i60l3.2262j0j7&sourceid=chrome&ie=UTF-8"
   	unparsed_page=HTTParty.get(url)
    	parsed_page= Nokogiri::HTML(unparsed_page)
     	byebug
end
  
scraper

