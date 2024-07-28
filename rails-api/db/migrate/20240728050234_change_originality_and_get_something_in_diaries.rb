class ChangeOriginalityAndGetSomethingInDiaries < ActiveRecord::Migration[7.0]
  def change
    change_column :diaries, :originality, :text, null: true, default: nil
    change_column :diaries, :get_something, :text, null: true, default: nil
  end
end