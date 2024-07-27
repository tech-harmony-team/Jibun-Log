class CreateDiaries < ActiveRecord::Migration[7.0]
  def change
    create_table :diaries do |t|
      t.references :user, null: false, foreign_key: true
      t.string :action_name, null: false
      t.text :action_detail, null: false
      t.text :question_one
      t.text :answer_one
      t.text :question_two
      t.text :answer_two
      t.string :img_url
      t.text :originally
      t.text :get_something
      t.boolean :is_best_diary, default: false, null: false
      t.datetime :start_time
      t.datetime :end_time
      t.date :date

      t.timestamps
    end
  end
end
