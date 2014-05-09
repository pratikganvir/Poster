class CreatePosterComments < ActiveRecord::Migration
  def change
    create_table :poster_comments do |t|
      t.integer :feed_id
      t.text :body

      t.timestamps
    end
  end
end
