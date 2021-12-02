## Associations diagram

Company --< Freebies >-- Dev

### `freebies` table

| Column | Type | 
| company_id | integer |
| dev_id | integer |
| item_name | string |
| value | integer |


- [x] create migration for above
- [x] run migrations
- [x] complete Freebie model
- [x] add associations to models
- [x] complete `seeds.rb`
- [x] seed db

### AR Association macros

- Company
 - [x]has_many :freebies
 - [x]has_many :devs, through: :freebies
- Freebie
 - [x]belongs_to :company
 - [x]belongs_to :dev
- Dev
 - [x]has_many :freebies
 - [x]has_many :companies, through: :freebies

### Aggregate and Association Methods

#### Freebie

- `Freebie#print_details`
  - should return a string formatted as follows:
    `{insert dev's name} owns a {insert freebie's item_name} from {insert company's name}`

#### Company

- `Company#give_freebie(dev, item_name, value)`
  - takes a `dev` (an instance of the `Dev` class), an `item_name` (string), and a `value`
    as arguments, and creates a new `Freebie` instance associated with this
    company and the given dev
- `Company.oldest_company`
  - returns the `Company` instance with the earliest founding year

#### Dev

- `Dev#received_one?(item_name)`
  - accepts an `item_name` (string) and returns true if any of the freebies
    associated with the dev has that `item_name`, otherwise returns false
- `Dev#give_away(dev, freebie)`
  - accepts a `Dev` instance and a `Freebie` instance, changes the freebie's dev
    to be the given dev; your code should only make the change if the freebie
    belongs to the dev who's giving it away
