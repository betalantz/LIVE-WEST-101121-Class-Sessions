puts "Clearing data..."
Company.destroy_all
Dev.destroy_all

puts "Creating companies..."
Company.create(name: "Google", founding_year: 1998)
Company.create(name: "Facebook", founding_year: 2004)
Company.create(name: "Dunder Mifflin", founding_year: 2002)
Company.create(name: "Enron", founding_year: 1995)

puts "Creating devs..."
Dev.create(name: "Rick")
Dev.create(name: "Morty")
Dev.create(name: "Mr. Meseeks")
Dev.create(name: "Gazorpazop")



puts "Creating freebies..."

# ***************************************************************
# * TODO: create freebies! Remember, a freebie belongs to a dev *
# * and a freebie belongs to a company.                         *
# ***************************************************************
# Create freebies Here

items = ["waterbottle", "thumb drive", "sticker", "bag", "fidget spinner"]
items.each{|item|
    c_id = Company.ids.sample
    dev = Dev.all.sample
    value = rand(2..15)
    Freebie.create(company_id: c_id, dev: dev, item_name: item, value: value)
}

puts "Seeding done!"
