require 'pry'

# Your code goes here
class Computer

    attr_reader :brand, :model
    attr_accessor :memory_GB, :storage_free

    def initialize(brand, model) # a special one-time setter
        @brand = brand
        @model = model
        @memory_GB = 8 
        @storage_free = 1000
    end

    def storage_free=(value)
        # if value >= 0 && value <= 1000
        #     @storage_free = value
        # elsif value < 0
        #     @storage_free = 0
        # elsif value > 1000
        #     @storage_free = 1000
        # end
        @storage_free = value.clamp(0, 1000)
    end

    def upgrade_memory(ram)
        # @memory_GB = @memory_GB + ram[:size]
        self.memory_GB += ram[:size]
    end

    def disk_full?(file_size)
        # file_size < @storage_free ? true : false
        file_size > self.storage_free
    end

    def save_file(file)
        if disk_full?(file[:size])
            "There is not enough space on disk to save #{file[:name]}."
        else
            self.storage_free -= file[:size]
            "#{file[:name]} has been saved!"
        end
    end

    def delete_file(file)
        self.storage_free += file[:size]
        "#{file[:name]} has been deleted."
    end

    def specs
        "Your current memory is: #{self.memory_GB} GB \n Your current free disk space is: #{self.storage_free} GB"
    end

end

new_ram = {model: "Corsair", size: 8}
my_file = {name: "budget.xls", size: 0.2}

binding.pry
0