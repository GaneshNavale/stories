class AddColumnDataToPosts < ActiveRecord::Migration[7.1]
  def change
    add_column :posts, :data, :jsonb
  end
end
