class Role < ActiveRecord::Base

    has_many :auditions

    def actors
        self.auditions.map{|aud| aud.actor}
    end

    def locations
        self.auditions.map(&:location)
    end

    def lead
        # returns first instance of audition hired for this role OR 'no actor hired...'
        # lead = self.auditions.find{|audition| audition.hired} # Ruby's .find will iterate the array and return either first element that returns true or nil
        lead = self.auditions.find_by(hired: true) # uses all AR methods
        lead ? lead : "No actor has been hired for this role"
    end

    def understudy
        # returns second instance of audition hired for this role OR 'no actor hired...'
        # hireds = self.auditions.filter{|aud| aud.hired} # Ruby's .filter will return a new array of select elements
        # hireds = Audition.where(hired: true, role: self) # AR's .where also returns and array and can match multiple conditions
        # understudy = hireds[1] # just grabbing the second element of the filtered array
        understudy = self.auditions.where(hired: true).second # using all AR methods
        understudy ? understudy : "No actor has been hired as understudy for this role"
    end

end