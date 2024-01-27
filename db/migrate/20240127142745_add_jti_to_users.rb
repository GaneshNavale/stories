class AddJtiToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :jti, :string, null: false
    add_index :users, :jti
  end
end
