extern crate regex;
use regex::Regex;
fn main() {
    let re = Regex::new(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+").unwrap();  
    println!("Hey mate input your email");
    let mut text = String::new();
    std::io::stdin().read_line(&mut text);
    println!("Is input email?");
    println!("{}" , re.is_match(&text));
}
