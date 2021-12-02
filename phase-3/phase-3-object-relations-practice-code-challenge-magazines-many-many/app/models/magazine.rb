class Magazine < ActiveRecord::Base

    def self.most_popular
        # self.all.max{|a, b| a.subscriptions.length <=> b.subscriptions.length }
        subs_arr = Subscription.all.map{|sub| sub.magazine_id} # this solution is more performant than above
        target_id = subs_arr.max_by {|sub| subs_arr.count(sub)}
        self.find(target_id)
    end

    has_many :subscriptions
    has_many :readers, through: :subscriptions

    def email_list
        self.readers.map{|reader| reader.email}.join(";")
    end
  
end