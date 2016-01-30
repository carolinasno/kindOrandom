class CreateKindnesses < ActiveRecord::Migration
  def change
    create_table :kindnesses do |t|
      t.string :name
      t.decimal :lat
      t.decimal :lng
      t.text :kindness
      t.string :date
      t.string :location

      t.timestamps null: false
    end
  end
end
