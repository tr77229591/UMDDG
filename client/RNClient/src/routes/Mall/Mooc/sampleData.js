const sampleData = [
  {
    name: "3 ways to be a better ally in the workplace",
    teacher: "Melinda Epler",
    avatar: "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/a8d46be076dd754d8c9b40fc4b8ab3bebbef56ef_1600x1200.jpg?w=1200",
    vURL: require("./sampleVideo/1.mp4"),
    price: "150",
    howmany: "1000",
    description: `<p>We're taught to believe that hard work and dedication will lead to success, but that's not always the case. Gender, race, ethnicity, religion, disability, sexual orientation are among the many factors that affect our chances, says writer and advocate Melinda Epler, and it's up to each of us to be allies for those who face discrimination. In this actionable talk, Epler shares three ways to support people who are underrepresented in the workplace. "There's no magic wand for correcting diversity and inclusion," she says. "Change happens one person at a time, one act at a time, one word at a time." Check out more TED Talks: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=k12j-E1LsUU&amp;redir_token=c4pP_icJLbbjfcrxFFKOBZ-8ibt8MTU0MDY1NzUwOUAxNTQwNTcxMTA5&amp;event=video_description&amp;q=http%3A%2F%2Fwww.ted.com" rel="nofollow">http://www.ted.com</a> The TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. Follow TED on Twitter: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=k12j-E1LsUU&amp;redir_token=c4pP_icJLbbjfcrxFFKOBZ-8ibt8MTU0MDY1NzUwOUAxNTQwNTcxMTA5&amp;event=video_description&amp;q=http%3A%2F%2Fwww.twitter.com%2FTEDTalks" rel="nofollow">http://www.twitter.com/TEDTalks</a> Like TED on Facebook: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=k12j-E1LsUU&amp;redir_token=c4pP_icJLbbjfcrxFFKOBZ-8ibt8MTU0MDY1NzUwOUAxNTQwNTcxMTA5&amp;event=video_description&amp;q=https%3A%2F%2Fwww.facebook.com%2FTED" rel="nofollow">https://www.facebook.com/TED</a> Subscribe to our channel: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/TED" rel="nofollow">https://www.youtube.com/TED</a></p>`,
    comments: [
      {
        name: "Howe Chen@UMAC",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        content: "A truly wonderful video, thank you very much!",
      },
      {
        name: "Rui Lee@MUST",
        content: "Nice Video!",
        avatar:
          "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      },
      {
        name: "Duan Wong@THU",
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
        content: "I found this video very helpful, thanks😃.",
      },
      {
        name: "Yan Zhong@UMAC",
        avatar:
          "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-10.jpg",
        content: "Cool, found it interesting. 😂",
      },
      {
        name: "Jing Wang@PKU",
        avatar: "https://www.w3schools.com/w3images/avatar2.png",
        content: "Wow, there are so many people out there in the hall",
      },
      {
        name: "Jiaxin Liu@UAAC",
        avatar:
          "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg",
        content: "Nice Video!",
      },
    ],
  },
  {
    name: "What doctors should know about gender identity",
    teacher: "Kristie Overstreet",
    vURL: require("./sampleVideo/2.mp4"),
    avatar:
      "http://im.rediff.com/getahead/2015/dec/31ted2.jpg",
    price: "200",
    howmany: "1000",
    description: `<p>Kristie Overstreet is on a mission to ensure that the transgender community gets their health care needs met. In this informative, myth-busting talk, she provides a primer for understanding gender identity and invites us to shift how we view transgender health care -- so that everyone gets the respect and dignity they deserve when they go to a doctor. Check out more TED Talks: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=Euegk8-WjoQ&amp;redir_token=44x_KvVFqU8UVPLHVlN0dPj9epN8MTU0MDY1NzUxMEAxNTQwNTcxMTEw&amp;event=video_description&amp;q=http%3A%2F%2Fwww.ted.com" rel="nofollow">http://www.ted.com</a> The TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. Follow TED on Twitter: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=Euegk8-WjoQ&amp;redir_token=44x_KvVFqU8UVPLHVlN0dPj9epN8MTU0MDY1NzUxMEAxNTQwNTcxMTEw&amp;event=video_description&amp;q=http%3A%2F%2Fwww.twitter.com%2FTEDTalks" rel="nofollow">http://www.twitter.com/TEDTalks</a> Like TED on Facebook: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=Euegk8-WjoQ&amp;redir_token=44x_KvVFqU8UVPLHVlN0dPj9epN8MTU0MDY1NzUxMEAxNTQwNTcxMTEw&amp;event=video_description&amp;q=https%3A%2F%2Fwww.facebook.com%2FTED" rel="nofollow">https://www.facebook.com/TED</a> Subscribe to our channel: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/TED" rel="nofollow">https://www.youtube.com/TED</a></p>`,
    comments: [
      {
        name: "Chen",
        avatar: "https://www.w3schools.com/w3images/avatar2.png",
        content: "Good job!",
      },
      {
        name: "Rui",
        avatar:
          "https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg",
        content: "Nice Video!",
      },
    ],
  },
  {
    name: "How language shapes the way we think",
    teacher: "Lera Boroditsky",
    vURL: require("./sampleVideo/3.mp4"),
    avatar: "https://www.fluentu.com/blog/educator-english/wp-content/uploads/sites/13/2018/02/easy-ted-talks-for-esl-1-e1519231059569.jpg",
    price: "233",
    howmany: "1000",
    description: `<p>There are about 7,000 languages spoken around the world -- and they all have different sounds, vocabularies and structures. But do they shape the way we think? Cognitive scientist Lera Boroditsky shares examples of language -- from an Aboriginal community in Australia that uses cardinal directions instead of left and right to the multiple words for blue in Russian -- that suggest the answer is a resounding yes. "The beauty of linguistic diversity is that it reveals to us just how ingenious and how flexible the human mind is," Boroditsky says. "Human minds have invented not one cognitive universe, but 7,000." Check out more TED Talks: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=RKK7wGAYP6k&amp;event=video_description&amp;q=http%3A%2F%2Fwww.ted.com&amp;redir_token=XZjHvaqRQrI_iuHUxuhAtliY62t8MTU0MDY1NzUxMUAxNTQwNTcxMTEx" rel="nofollow">http://www.ted.com</a> The TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. Follow TED on Twitter: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=RKK7wGAYP6k&amp;event=video_description&amp;q=http%3A%2F%2Fwww.twitter.com%2FTEDTalks&amp;redir_token=XZjHvaqRQrI_iuHUxuhAtliY62t8MTU0MDY1NzUxMUAxNTQwNTcxMTEx" rel="nofollow">http://www.twitter.com/TEDTalks</a> Like TED on Facebook: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=RKK7wGAYP6k&amp;event=video_description&amp;q=https%3A%2F%2Fwww.facebook.com%2FTED&amp;redir_token=XZjHvaqRQrI_iuHUxuhAtliY62t8MTU0MDY1NzUxMUAxNTQwNTcxMTEx" rel="nofollow">https://www.facebook.com/TED</a> Subscribe to our channel: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/TED" rel="nofollow">https://www.youtube.com/TED</a></p>`,
    comments: [
      {
        name: "Yan",
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
        content: "Good job!",
      },
      {
        name: "Zhong",
        avatar:
          "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-10.jpg",
        content: "Nice Video!",
      },
    ],
  },
  {
    name: "3 ways to make better decisions",
    teacher: "Tom Griffiths",
    vURL: require("./sampleVideo/4.mp4"),
    avatar:
      "https://cdn-images-1.medium.com/max/629/1*OxqNRUOxBL_mKybgfqc3jA.png",
    price: "345",
    howmany: "1000",
    description: `<p>If you ever struggle to make decisions, here's a talk for you. Cognitive scientist Tom Griffiths shows how we can apply the logic of computers to untangle tricky human problems, sharing three practical strategies for making better decisions -- on everything from finding a home to choosing which restaurant to go to tonight. Check out more TED Talks: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?q=http%3A%2F%2Fwww.ted.com&amp;event=video_description&amp;v=1mLQFm3wEfw&amp;redir_token=yvK33wbQa4qbB-F9h-dNQid4WRp8MTU0MDY1NzUxNUAxNTQwNTcxMTE1" rel="nofollow">http://www.ted.com</a> The TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. Follow TED on Twitter: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?q=http%3A%2F%2Fwww.twitter.com%2FTEDTalks&amp;event=video_description&amp;v=1mLQFm3wEfw&amp;redir_token=yvK33wbQa4qbB-F9h-dNQid4WRp8MTU0MDY1NzUxNUAxNTQwNTcxMTE1" rel="nofollow">http://www.twitter.com/TEDTalks</a> Like TED on Facebook: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?q=https%3A%2F%2Fwww.facebook.com%2FTED&amp;event=video_description&amp;v=1mLQFm3wEfw&amp;redir_token=yvK33wbQa4qbB-F9h-dNQid4WRp8MTU0MDY1NzUxNUAxNTQwNTcxMTE1" rel="nofollow">https://www.facebook.com/TED</a> Subscribe to our channel: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/TED" rel="nofollow">https://www.youtube.com/TED</a></p>`,
    comments: [
      {
        name: "Yan",
        avatar: "https://www.w3schools.com/w3images/avatar6.png",
        content: "Good job!",
      },
      {
        name: "Zhong",
        avatar:
          "http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-10.jpg",
        content: "Nice Video!",
      },
    ],
  },
  {
    name: "How to make stress your friend",
    teacher: "Kelly McGonigal",
    vURL: require("./sampleVideo/5.mp4"),
    avatar:
      "https://www.incimages.com/uploaded_files/image/970x450/amycuddyTED_100105-cc_100105.jpg",
    price: "678",
    howmany: "1000",
    description: `<p>Stress. It makes your heart pound, your breathing quicken and your forehead sweat. But while stress has been made into a public health enemy, new research suggests that stress may only be bad for you if you believe that to be the case. Psychologist Kelly McGonigal urges us to see stress as a positive, and introduces us to an unsung mechanism for stress reduction: reaching out to others. TEDTalks is a daily video podcast of the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and much more. Find closed captions and translated subtitles in many languages at <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=RcGyVTAoXEU&amp;event=video_description&amp;q=http%3A%2F%2Fwww.ted.com%2Ftranslate&amp;redir_token=PQCjmrZ4xh2eMSZlIR8qAdQY04J8MTU0MDY1NzUxNkAxNTQwNTcxMTE2" rel="nofollow">http://www.ted.com/translate</a> Follow TED news on Twitter: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=RcGyVTAoXEU&amp;event=video_description&amp;q=http%3A%2F%2Fwww.twitter.com%2Ftednews&amp;redir_token=PQCjmrZ4xh2eMSZlIR8qAdQY04J8MTU0MDY1NzUxNkAxNTQwNTcxMTE2" rel="nofollow">http://www.twitter.com/tednews</a> Like TED on Facebook: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=RcGyVTAoXEU&amp;event=video_description&amp;q=https%3A%2F%2Fwww.facebook.com%2FTED&amp;redir_token=PQCjmrZ4xh2eMSZlIR8qAdQY04J8MTU0MDY1NzUxNkAxNTQwNTcxMTE2" rel="nofollow">https://www.facebook.com/TED</a> Subscribe to our channel: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="http://www.youtube.com/user/TEDtalksDirector" rel="nofollow">http://www.youtube.com/user/TEDtalksD...</a></p>`,
    comments: [
      {
        name: "Howe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        content: "Good job!",
      },
      {
        name: "Tang",
        content: "Nice Video!",
        avatar:
          "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      },
    ],
  },
  {
    name: "How to fix a broken heart",
    teacher: "Guy Winch",
    vURL: require("./sampleVideo/6.mp4"),
    avatar: "https://img.timesnownews.com/zoom/story/1513191064-shah-rukh-khan-ted-talks-india-launch_2.jpg",
    price: "110",
    howmany: "1000",
    description: `<div id="content" class="style-scope ytd-expander">
<div id="description" class="style-scope ytd-video-secondary-info-renderer">At some point in our lives, almost every one of us will have our heart broken. Imagine how different things would be if we paid more attention to this unique emotional pain. Psychologist Guy Winch reveals how recovering from heartbreak starts with a determination to fight our instincts to idealize and search for answers that aren't there -- and offers a toolkit on how to, eventually, move on. Our hearts might sometimes be broken, but we don't have to break with them. Check out more TED Talks: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=k0GQSJrpVhM&amp;event=video_description&amp;redir_token=QwaGBJSP_FD5B6wFFRBfOB5F4uV8MTU0MDY1NzUxOEAxNTQwNTcxMTE4&amp;q=http%3A%2F%2Fwww.ted.com" rel="nofollow">http://www.ted.com</a> The TED Talks channel features the best talks and performances from the TED Conference, where the world's leading thinkers and doers give the talk of their lives in 18 minutes (or less). Look for talks on Technology, Entertainment and Design -- plus science, business, global issues, the arts and more. Follow TED on Twitter: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=k0GQSJrpVhM&amp;event=video_description&amp;redir_token=QwaGBJSP_FD5B6wFFRBfOB5F4uV8MTU0MDY1NzUxOEAxNTQwNTcxMTE4&amp;q=http%3A%2F%2Fwww.twitter.com%2FTEDTalks" rel="nofollow">http://www.twitter.com/TEDTalks</a> Like TED on Facebook: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/redirect?v=k0GQSJrpVhM&amp;event=video_description&amp;redir_token=QwaGBJSP_FD5B6wFFRBfOB5F4uV8MTU0MDY1NzUxOEAxNTQwNTcxMTE4&amp;q=https%3A%2F%2Fwww.facebook.com%2FTED" rel="nofollow">https://www.facebook.com/TED</a> Subscribe to our channel: <a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="https://www.youtube.com/TED" rel="nofollow">https://www.youtube.com/TED</a></div>
<p>&nbsp;</p>
</div>
<div id="always-shown" class="style-scope ytd-metadata-row-container-renderer">&nbsp;</div>
<div id="collapsible" class="style-scope ytd-metadata-row-container-renderer">&nbsp;</div>`,
    comments: [
      {
        name: "Howe",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        content: "Good job!",
      },
      {
        name: "Tang",
        content: "Nice Video!",
        avatar:
          "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
      },
    ],
  },
];

export default sampleData;
