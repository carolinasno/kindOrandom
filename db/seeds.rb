# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

kindness = Kindness.create([
  name: 'carolina',
  date: 'Jan. 29, 2016',
  kindness: 'helped an old man carry bags up a flight of stairs',
  location: '10 East 21st Street, New York, NY 10010',
  lat: '40.7399',
  lng: '-73.9901'
  ]);
kindness = Kindness.create([
  name: 'oliver',
  date: 'Jan. 30, 2016',
  kindness: 'saw a woman buy a homeless man a sandwich and coffee',
  location: '166 Elizabeth Street, New York, NY 10012',
  lat: '40.720641',
  lng: '-73.994770'
  ]);
kindness = Kindness.create([
  name: 'matilda',
  date: 'Jan. 31, 2016',
  kindness: 'saved a guy from getting hit by a bus',
  location: '13-17 Laight Street, New York, NY 10013',
  lat: '40.721515',
  lng: '74.006277'
  ]);
