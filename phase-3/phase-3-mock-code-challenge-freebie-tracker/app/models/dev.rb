class Dev < ActiveRecord::Base

    has_many :freebies
    has_many :companies, through: :freebies

    def received_one?(item_name)
        self.freebies.any? { |freebie|
            freebie.item_name == item_name
        }
    end

    def give_away(dev, freebie)
        if received_one?(freebie.item_name)
            gift = self.freebies.find_by(id: freebie.id)
            gift.update(dev: dev)
            self.reload # because AR cache results of previous queries
            dev.reload
        else
            "You can't give what you don't own!"
        end
    end

end
