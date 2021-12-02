## Associations Diagram

Reader --< Subscription >-- Magazine

### `subcriptions` table

| Column | Type |
| reader_id | integer |
| magazine_id | integer |
| price | integer|

## Set up

- [x] create migration for the above
- [x] run migrations
- [x] complete the Subscription model
- [x] add associations to models
- [] complete `seeds.rb`
- [] seed db

### AR Association macros
-Reader
 - [] has_many :subscriptions
 - [] has_many :magazines, through: :subscriptions
- Subscription
 - [] belongs_to :reader
 - [] belongs_to :magazine
- Magazine
 - [] has_many :subscriptions
 - [] has_many :readers, through: :subscriptions

### Aggregate and Association Methods

#### Subscription
- `Subscription#print_details`
  - `puts` a string to the terminal to display the details of the subscription
  - the string should be formatted like this: `{reader name} subscribed to {magazine title} for ${subscription price}`

#### Reader

- `Reader#subscribe(magazine, price)`
  - takes a `magazine` (an instance of the `Magazine` class) and a `price` (integer) as arguments, and creates a new `subscription` in the database associated with the magazine and the reader
- `Reader#total_subcription_price`
  - returns the total price for all the reader's subscriptions
- `Reader#cancel_subscription(magazine)`
  - takes a `magazine` instance and removes the subscription for this reader
  - you will have to delete a row from the `subscriptions` table to get this to work!

#### Magazine

- `Magazine#email_list`
  - returns a `String` of a semi-colon separated list of emails for all the readers subscribed to this magazine
  - the string should be formatted like this: `email1@example.com;email2@example.com;email3@example.com`
- `Magazine.most_popular`
  - returns the `Magazine` instance with the most subscribers
