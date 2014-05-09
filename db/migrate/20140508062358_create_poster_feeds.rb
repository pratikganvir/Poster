class CreatePosterFeeds < ActiveRecord::Migration
  def change
    create_table :poster_feeds do |t|
      t.text :body

      t.timestamps
    end
  end
end
