class RenameOriginallyColumnToDiaries < ActiveRecord::Migration[7.0]
  def change
    rename_column :diaries, :originally, :originality
  end
end
