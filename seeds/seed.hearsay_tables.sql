BEGIN;

TRUNCATE
  hearsay_users,
  hearsay_reviews,
  hearsay_discussion,
  hearsay_topics
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

INSERT INTO hearsay_reviews (state, department, comments, rating, incident_date, review_date, nature, user_id) 
    VALUES
(
        'Alabama',
        'Birmingham Police Department',
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        9,
        '2018-05-22',
        '2019-09-09 04:58:22',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1
    ),
    (
        'Wisconsin',
        'Madison Police Department',
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        3,
        '2016-08-04',
        '2019-12-05 23:27:02',
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 2
    ),
    (
        'California',
        'Berkeley Police Department',
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
        4,
        '2020-01-20',
        '2020-01-26 18:15:10',
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 3
    ),
    (
        'California',
        'Escondido Police Department',
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        7,
        '2019-09-03',
        '2019-09-08 01:23:23',
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 4
    ),
    (
        'California',
        'San Bernardino Police Department',
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
        7,
        '2020-01-25',
        '2020-01-27 07:53:53',
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 5
    ),
    (
        'Pennsylvania',
        'Pittsburgh Police Department',
        'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        7,
        '2019-05-03',
        '2019-05-29 07:55:45',
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 6
    ),
    (
        'Colorado',
        'Denver Police Department',
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        2,
        '2020-01-10',
        '2020-01-17 03:23:36',
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',7
    ),
    (
        'Nevada',
        'Las Vegas Police Department',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        9,
        '2020-04-30',
        '2020-05-02 06:16:56',
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',8
    ),
    (
        'Washington, DC',
        'District of Columbia Metropolitan Police Department',
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        8,
        '2016-12-02',
        '2019-12-03 19:17:05',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',9
    ),
    (
        'West Virginia',
        'Huntington Police Department',
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        3,
        '2017-09-04',
        '2019-09-04 20:45:44',
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',10
    ),
    (
        'Indiana',
        'Indianapolis Police Department',
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        5,
        '2011-11-22',
        '2019-07-30 11:04:05',
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',11
    ),
    (
        'California',
        'Pasadena Police Department',
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        1,
        '2019-08-14',
        '2019-09-15 15:04:22',
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',12
    ),
    (
        'Oregon',
        'Salem Police Department',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        6,
        '2019-10-07',
        '2019-11-08 12:24:42',
        'In congue. Etiam justo. Etiam pretium iaculis justo.', 13
    ),
    (
        'California',
        'San Francisco Police Department',
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        4,
        '2019-03-02',
        '2019-05-20 13:15:24',
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',14
    ),
    (
        'Texas',
        'Houston Police Department',
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        8,
        '2019-06-02',
        '2019-07-04 14:56:29',
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',6
    ),
    (
        'Florida',
        'Bonita Springs Police Department',
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        4,
        '2019-06-04',
        '2019-07-29 16:01:41',
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',3
    ),
    (
        'Illinois',
        'Chicago Police Department',
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        5,
        '2019-08-04',
        '2019-10-23 01:32:04',
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',2
    ),
    (
        'New York',
        'New York City Police Department',
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        1,
        '2018-04-03',
        '2019-06-20 22:54:31',
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',7
    ),
    (
        'Tennessee',
        'Memphis Police Department',
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        3,
        '2017-06-04',
        '2019-05-24 21:35:42',
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',9
    ),
    (
        'Florida',
        'Tampa Police Department',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        10,
        '2019-07-30',
        '2019-09-06 22:37:49',
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',4
    ),
    (
        'Florida',
        'Orlando Police Department',
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        3,
        '2012-11-22',
        '2019-12-26 22:52:22',
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',1
    ),
    (
        'Arizona',
        'Phoenix Police Department',
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        6,
        '2017-08-12',
        '2019-08-02 09:41:09',
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',5
    ),
    (
        'Oklahoma',
        'Tulsa Police Department',
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        5,
        '2019-05-04',
        '2019-07-28 04:03:32',
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',10
    ),
    (
        'Minnesota',
        'Minnesota State Patrol',
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        1,
        '2017-09-10',
        '2019-06-10 08:08:48',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',11
    ),
    (
        'Massachusetts',
        'Boston Police Department',
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        9,
        '2018-08-09',
        '2019-09-11 18:28:42',
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',13
    )
;
INSERT INTO hearsay_topics (topic_name)
    VALUES 
    ('Police Brutality'),
    ('Criminal Justice Reform'),
    ('War on Drugs'),
    ('What the System is Doing Well'),
    ('Capital Punishment'),
    ('Crime Prevention'),
    ('Juvenile Justice'),
    ('Police-Community Relations'),
    ('Prison System'),
    ('Race'),
    ('Random'),
    ('Forensic Science');

INSERT INTO hearsay_discussion (discussion_post, topic_name, user_id)
    VALUES 
    ('Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.','Police Brutality',8),
    ('In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.','Juvenile Justice',11),
    ('Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.','Race',9),
    ('Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.','War on Drugs',14),
    ('Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.','Capital Punishment',13),
    ('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.','Random',11),
    ('Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.','Random',5),
    ('Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.','What the System is Doing Well',3),
    ('Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.','Crime Prevention',2),
    ('Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.','Prison System',11),
    ('Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.','Criminal Justice Reform',11),
    ('In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.','Random',1),
    ('In congue. Etiam justo. Etiam pretium iaculis justo.','Police-Community Relations',14),
    ('Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.','Random',8),
    ('Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.','Race', 6);

COMMIT;