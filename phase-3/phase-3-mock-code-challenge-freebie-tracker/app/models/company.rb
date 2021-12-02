class Company < ActiveRecord::Base

    def self.oldest_company
        # self.all.min {|a, b| a.founding_year <=> b.founding_year} # using Ruby method .min
        self.order(:founding_year).first # use AR methods
    end
    
    has_many :freebies
    has_many :devs, through: :freebies
    
    def give_freebie(dev, item_name, value)
        self.freebies.create(dev: dev, item_name: item_name, value: value)
    end
    
end
