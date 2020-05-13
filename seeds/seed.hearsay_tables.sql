BEGIN;

TRUNCATE
  hearsay_users,
  hearsay_reviews
  RESTART IDENTITY CASCADE;

INSERT INTO hearsay_users (user_name, full_name, nick_name, password
) VALUES
('hbarkworth0', 'Herculie Barkworth','Herculie','1R7PAhBbT'),
('asowray1','Allistir Sowray','Allistir','Ff69xb0s'),
('hgumly2','Holly-anne Gumly','Holly-anne','QxPbzQ'),
('mcoyett3','Minta Coyett','Minta','vcr9XwDPFUia'),
('aransfield4','Abagail Ransfield','Abagail','YS6pMqfJLt'),
('mluckin5','Minne Luckin','Minne','cKvgY0'),
('hattfield6','Humbert Attfield','Humbert','M6fKAYasfBoQ'),
('hlaye7','Hanan Laye','Hanan','fpKhUh'),
('imansbridge8','Idalina Mansbridge','Idalina','xFzli8K2'),
('pdelepine9','Papageno Delepine','Papageno','suZ2g0'),
('mhannaa','Malcolm Hanna','Malcolm','wCJF36d'),
('arosleb','Agretha Rosle','Agretha','SHG90Yx23'),
('kantoniottiic','Kerwinn Antoniottii','Kerwinn','t4NaAX6xQQg'),
('roldalld','Roscoe Oldall','Roscoe','VfUUfZ8viBp'),
('sbordere','Siffre Border','Siffre','nmkc4u');

INSERT INTO hearsay_reviews (state, department, comments, rating, date, nature, user_id) 
    VALUES
(
        'Alabama',
        'Birmingham',
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        9,
        '2019-09-09 04:58:22',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1
    ),
    (
        'Wisconsin',
        'Madison',
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        3,
        '2019-12-05 23:27:02',
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 2
    ),
    (
        'California',
        'Berkeley',
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        4,
        '2020-01-26 18:15:10',
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 3
    ),
    (
        'California',
        'Escondido',
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        7,
        '2019-09-08 01:23:23',
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 4
    ),
    (
        'California',
        'San Bernardino',
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
        7,
        '2020-01-27 07:53:53',
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 5
    ),
    (
        'Pennsylvania',
        'Pittsburgh',
        'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        7,
        '2019-05-29 07:55:45',
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 6
    ),
    (
        'Colorado',
        'Denver',
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        2,
        '2020-01-17 03:23:36',
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',7
    ),
    (
        'Nevada',
        'Las Vegas',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        9,
        '2020-05-02 06:16:56',
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',8
    ),
    (
        'District of Columbia',
        'Washington',
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        8,
        '2019-12-03 19:17:05',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',9
    ),
    (
        'West Virginia',
        'Huntington',
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        3,
        '2019-09-04 20:45:44',
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',10
    ),
    (
        'Indiana',
        'Indianapolis',
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        5,
        '2019-07-30 11:04:05',
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',11
    ),
    (
        'California',
        'Pasadena',
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        1,
        '2019-09-15 15:04:22',
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',12
    ),
    (
        'Oregon',
        'Salem',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        6,
        '2019-11-08 12:24:42',
        'In congue. Etiam justo. Etiam pretium iaculis justo.', 13
    ),
    (
        'California',
        'San Francisco',
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        4,
        '2019-05-20 13:15:24',
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',14
    ),
    (
        'Texas',
        'Houston',
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        8,
        '2019-07-04 14:56:29',
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',6
    ),
    (
        'Florida',
        'Bonita Springs',
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        4,
        '2019-07-29 16:01:41',
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',3
    ),
    (
        'Illinois',
        'Chicago',
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        5,
        '2019-10-23 01:32:04',
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',2
    ),
    (
        'New York',
        'Bronx',
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        1,
        '2019-06-20 22:54:31',
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',7
    ),
    (
        'Tennessee',
        'Memphis',
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        3,
        '2019-05-24 21:35:42',
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',9
    ),
    (
        'Florida',
        'Tampa',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        10,
        '2019-09-06 22:37:49',
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',4
    ),
    (
        'Florida',
        'Orlando',
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        3,
        '2019-12-26 22:52:22',
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',1
    ),
    (
        'Arizona',
        'Phoenix',
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        6,
        '2019-08-02 09:41:09',
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',5
    ),
    (
        'Oklahoma',
        'Tulsa',
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        5,
        '2019-07-28 04:03:32',
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',10
    ),
    (
        'Minnesota',
        'Saint Paul',
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        1,
        '2019-06-10 08:08:48',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',11
    ),
    (
        'Massachusetts',
        'Newton',
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        9,
        '2019-09-11 18:28:42',
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',13
    )
;

COMMIT;