class CreateShelters < ActiveRecord::Migration[5.1]
  def change
    create_table :shelters do |t|
      t.string  :phone
      t.string  :address

      t.timestamps
    end
  end
end
