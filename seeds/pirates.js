exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pirates').del(),

    // Inserts seed entries
    knex('pirates').insert({name: 'Anne Bonney', poison:'Rum', accessory: 'hot temper', image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'}),
    knex('pirates').insert({name: 'Jack Sparrow', poison:'Tequila', accessory: 'black eyeliner', image_url: 'http://static.comicvine.com/uploads/original/11/111746/4352187-pirates4jacksparrowpostercropped.jpg'}),
    knex('pirates').insert({name: 'Teisia Park', poison:'Prosecco', accessory: 'brows on fleek', image_url: 'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/12079474_10101581537942342_7431577967509161150_n.jpg?oh=4461dcff746481b99ba748b20ef0c572&oe=576452A0'})
  );
};
