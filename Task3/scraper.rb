require 'nokogiri'
require 'httparty'
require 'pry'
var=1
search = HTTParty.get('https://google.com/search?q=linux&num=20')
parsed_page = Nokogiri::HTML(search)
Pry.start(binding)
until var < 10 do
  	puts parsed_page.css('a')[var].text
	puts parsed_page.css('a')[var]['href']
end
