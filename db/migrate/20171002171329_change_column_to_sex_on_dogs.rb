class ChangeColumnToSexOnDogs < ActiveRecord::Migration[5.1]
  def change
    rename_column :dogs, :gender, :sex
  end
end
