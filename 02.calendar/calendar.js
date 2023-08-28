#!/usr/bin/env node
//show関数　引数:year=年、month=月
function show(year, month) {
  //const:変更できない変数 number_of_days:月の日数
  const number_of_days = 31;
  //let:変更可能な変数　for:number_of_days回繰り返し
  for (let day = 1; day <= number_of_days; day += 1) {
    //dayが10未満のとき空白を出力
    if (day < 10) {
      process.stdout.write(" ");
    }
    //process.stdout.write:改行せずに出力　この行の意味: 改行せずに 日付と空白を出力
    //"" + day + " "    <- これの意味: 長さゼロの文字列(空文字列)に数値のdayを足して文字列にする
    // これでもできるprocess.stdout.write(`${day} `)
    process.stdout.write("" + day + " ");
    if (day % 7 == 0) {
      console.log("");
    }
  }
  console.log("");
}

let year = 2023;
let month = 8;

show(year, month);

/*require 'optparse'
require 'date'

def show(year, month)
  lastday = Date.new(year, month, -1)
  number_of_days = lastday.day
  
  puts "#{month}月 #{year}"
  puts "日 月 火 水 木 金 土"  

  firstday = Date.new(year, month, 1)
  s = "   " * firstday.wday
  print(s)

  (1..number_of_days).each do |x|
    if x < 10
      print " "
    end

    print "#{x} "

    
    if (x + firstday.wday) % 7 == 0
      puts 
    end

  end 
  puts

end

today = Date.today
year = today.year
month = today.month

options = ARGV.getopts('y:','m:')
if options['y']
  year = options['y'].to_i
end
if options['m']
  month = options['m'].to_i
end



show(year, month)*/
