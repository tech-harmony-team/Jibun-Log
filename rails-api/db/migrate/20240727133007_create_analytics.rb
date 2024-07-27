class CreateAnalytics < ActiveRecord::Migration[7.0]
  def change
    create_table :analytics do |t|
      t.references :user, null: false, foreign_key: true
      t.text :response

      t.timestamps
    end
  end
end
