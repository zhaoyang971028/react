import React,{Component} from 'react';
import './main.css';
import './reset.css';
import { Row, Col, Input, Icon, Tooltip, Button } from "antd";

class App extends Component{
    constructor() {
        super();
    }

    toLogin() {
        this.props.history.push({ pathname: "/LoginView", state: {} })
    }
    

    render() {
        return (
            <div>
            <div>
                <div className="dbbf">
            <div className="dbbf1">
                <img src="RA]E1IRTE3NI]]S4@880MNB.png" alt="" width="52px" height="18px"/>
                <div className="dbbf2">
                        <div className="dbbf21">
                            <div className="df211">
                                <ul>
                                    <li><a href="" className="iconfont icon-shangyishou"></a></li>
                                    <li><a href="" className="iconfont icon-bofang2"></a></li>
                                    <li><a href="" className="iconfont icon-xiayishou"></a></li>
                                </ul>
                            </div>
                                <div className="bf212">
                                    <a href=""><img src="http://p1.music.126.net/hTiVEeQTUSsc-YGF3o6ItQ==/109951163337847600.jpg?param=34y34" alt="" width="34px" height="35px"/></a>
                                </div>
                                <div className="bf213">
                                    <div className="bf2131">
                                        <a href="">往后余生</a>
                                        <a href="">王贰浪</a>
                                        <a href="" className="iconfont icon-suolian"></a>
                                    </div>
                                    <div className="bf2132">
                                        <div className="iconfont icon-shuangyuan sy"></div>
                                    </div>
                                    <div className="bf2133">00:00/00:00</div>
                                </div>
                                <div className="bf214">
                                    <ul>
                                        <li><a href="" className="iconfont icon-add-folder"></a></li>
                                        <li><a href="" className="iconfont icon-fenxiang"></a></li>
                                    </ul>
                                </div>
                                <div className="bf215">
                                    <ul>
                                        <li><a href="" className="iconfont icon-yinliang"></a></li>
                                        <li><a href="" className="iconfont icon-xunhuanbofang"></a></li>
                                    </ul>
                                </div>
                                <div className="bf216">
                                    <ul>
                                        <li><a href="" className="iconfont icon-plist"></a></li>
                                        <li className="ft">40</li>
                                    </ul>
                                </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className="div1">
            <div className="diva">
                <div className="divaa">
                    <ul>
                        <li className="hsj1">
                                <div className="hsj"></div>
                        </li>
                        <li className="a1"><a href=""><img src="Y`80EG(6`8N93Q3MQX@PE5J.png" alt="" width="170px" height="40px"/></a></li>
                        <li className="a2"><a href="">发现音乐</a></li>
                        <li className="a3"><a href="">我的音乐</a></li>
                        <li className="a4"><a href="">朋友</a></li>
                        <li className="a5"><a href="">商城</a></li>
                        <li className="a6"><a href="">音乐人</a></li>
                        <li className="a7"><a href="">下载客户端</a></li>
                        <li className="a8">HoT</li>
                    </ul>
                </div>
                <div className="divab">
                    <ul>
                        <li className="a9"><input type="text"  id="keyword" type="text" placeholder="音乐/视频/电台/用户" />
                            <div className="iconfont icon-sousuo1 sousuo"></div>
                        </li>
                        <li className="a10">
                            <a href="" className="a111">创作者中心
                                    <div className="bk"></div>
                            </a>
                        </li>
                        <li className="a11"><button className="a11-b"  onClick={this.toLogin.bind(this)}>登录<span className="iconfont icon-sanjiaoxing lu"></span>
                        <div className="dllb">
                        <ul>
                            <li className="xsj">
                                <div className="xsj1"></div>
                            </li>
                            <li className="dllb1">
                                <div className="iconfont icon-shouji sjdl1"></div>
                                <div className="sjdl2"><a href="">手机号登录</a></div>
                            </li>
                            <li className="dllb2">
                                <div className="iconfont icon-weixin sjdl1"></div>
                                <div className="sjdl2"><a href="">微信登录</a></div>
                            </li>
                            <li className="dllb3">
                                <div className="iconfont icon-qq sjdl1"></div>
                                <div className="sjdl2"><a href="">QQ登录</a></div>
                            </li>
                            <li className="dllb4">
                                <div className="iconfont icon-xinlang sjdl1"></div>
                                <div className="sjdl2"><a href="">新浪微博登录</a></div>
                            </li>
                            <li className="dllb5">
                                <div className="iconfont icon-wangyi sjdl1"></div>
                                <div className="sjdl2"><a href="">网易邮箱账号登录</a></div>
                            </li>
                        </ul>
                    </div>
                    </button></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="div2">
            <div className="divb">
                <div className="divbb">
                    <ul>
                        <li className="b1">
                            <div className="kuang1"><a href="">推荐</a></div>
                        </li>
                        <li className="b2">
                            <div className="kuang2"><a href="">排行榜</a></div>
                        </li>
                        <li className="b3">
                            <div className="kuang3"><a href="">歌单</a>
                                <div className="iconfont icon-H H"></div>
                            </div>
                        </li>
                        <li className="b4">
                            <div className="kuang4"><a href="">主播电台</a></div>
                        </li>
                        <li className="b5">
                            <div className="kuang5"><a href="">歌手</a></div>
                        </li>
                        <li className="b6">
                            <div className="kuang6"><a href="">新碟上架</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="div3">
            <div className="iconfont icon-right div31"></div>
            <div className="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing- div32"></div>
            <div className="divc">
                <div className="xyd">
                    <ul>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                        <li><a href="" className="iconfont icon-icon"></a></li>
                    </ul>
                </div>
                <div className="c1">
                    <ul>
                         <li><a href=""><img src="http://p1.music.126.net/6l2P_E9K2NdgqN2Xm-nUcQ==/109951164207816573.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/kf7c_L6sEFJvywB9QrdIhQ==/109951164218484097.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/2GnNl_XxJJ4JSzerdSUcQQ==/109951164218455222.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/QxNCCn6tKxuyDk58BMXCAg==/109951164218523465.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/f5KCVtAf1JOgKMtgPQZy4A==/109951164218427420.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/l1FPm7wYweeF2Z8j7ASCJA==/109951164218429638.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/P9B4U8axSNun5niBEcgi5A==/109951164219305339.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/XyOsH9i6nO3tyiV4xzTzEA==/109951164218412778.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/a2BMpGSpgJAiNZByLQC3Mg==/109951164219312986.jpg" alt=""/></a></li>
                         <li><a href=""><img src="http://p1.music.126.net/6l2P_E9K2NdgqN2Xm-nUcQ==/109951164207816573.jpg" alt=""/></a></li>
                    </ul>
                </div>
                <div className="c2"><a href=""><img src="https://s2.music.126.net/style/web2/img/index/download.png?f3b7929f940305b140afa98b2edc4ae4" alt=""/></a>
                        <div className="c3">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
                </div>
            </div>
        </div>
        <div className="div4">
            <div className="divd">
                <div className="d1">
                        <div className="dd1">
                            <ul>
                                <li className="iconfont icon-iconfont911yuanhuanbiaoqian-copy yuan"></li>
                                <li className="re"><a href="">热门推荐</a></li>
                                <li className="hua"><a href="">华语</a></li>
                                <li className="l">|</li>
                                <li className="liu"><a href="">流行</a></li>
                                <li className="l">|</li>
                                <li className="yao"><a href="">摇滚</a></li>
                                <li className="l">|</li>
                                <li className="min"><a href="">民谣</a></li>
                                <li className="l">|</li>
                                <li className="dian"><a href="">电子</a></li>
                                <li className="geng"><a href="">更多</a></li>
                                <li className="iconfont icon-you xiangyou"></li>
                            </ul>
                        </div>
                        <div className="dd2">
                            <ul>
                                <li className="tu1"><a href=""><img src="https://p.qpic.cn/music_cover/qE9MKluetOmDRWoHyhtBytHPv3CqJU6TwKXIDmH3B24Tpj3xnFvP4Q/300?n=1" alt="" width="140px" height="140px"/></a>
                                <a href="" className="wenzi1">听歌识人：哪一首故事，是你的故事？</a>
                            <div className="bofang1">
                                <div className="iconfont icon-erji erji"></div>
                                <div className="redu">205万</div>
                                <div ><a href="" className="iconfont icon-bofang"> </a></div>
                            </div>
                        </li>
                                <li className="tu2"><a href=""><img src="https://p.qpic.cn/music_cover/ajNVdqHZLLC81mBtib6zVxg2eLnQ3crgzwjpo6d5BlVdQvh0oCtaliaw/300?n=1" alt="" width="140px" height="140px"/></a>
                                <a href="" className="wenzi1">希望你每个昨天今天明天 都因为音乐而快乐</a>
                            <div className="bofang1">
                                <div className="iconfont icon-erji erji"></div>
                                <div className="redu">383万</div>
                                <div ><a href="" className="iconfont icon-bofang"> </a></div>
                            </div>
                    </li>
                                <li className="tu3"><a href=""/><a href=""><img src="https://p.qpic.cn/music_cover/XkvoO3t2zBy0z9cupUMtqtgztI7AM6urdPdLGYu0C3fErzdhSordZA/300?n=1" alt="" width="140px" height="140px"/></a>
                                <a href="" className="wenzi1">『古风』江南雨巷油伞渡</a>
                            <div className="bofang1">
                                <div className="iconfont icon-erji erji"></div>
                                <div className="redu">372万</div>
                                <div ><a href="" className="iconfont icon-bofang"> </a></div>
                            </div></li>
                                <li className="tu4"><a href=""/><a href=""><img src="https://p.qpic.cn/music_cover/PiajxSqBRaEISibhtdxpkLprufpT7OzywmZksgnxoguZwkZxZgIsZYug/300?n=1" alt="" width="140px" height="140px"/></a>
                                <a href="" className="wenzi1">【节奏控】超带感特别推荐BGM 持更</a>
                            <div className="bofang1">
                                <div className="iconfont icon-erji erji"></div>
                                <div className="redu">437万</div>
                                <div ><a href="" className="iconfont icon-bofang"> </a></div>
                            </div></li>
                                <li className="tu5"><a href=""/><a href=""><img src="https://p.qpic.cn/music_cover/rn9BBETnfKkicngmibIAtUlapGxncrvIQk6ajwvKoy8YOz7TswsOPLzA/300?n=1" alt="" width="140px" height="140px"/></a>
                                <a href="" className="wenzi1">作文素材 那些可以用到作文里的歌词</a>
                            <div className="bofang1">
                                <div className="iconfont icon-erji erji"></div>
                                <div className="redu">561万</div>
                                <div ><a href="" className="iconfont icon-bofang"> </a></div>
                            </div></li>
                                <li className="tu6"><a href=""/><a href=""><img src="https://p.qpic.cn/music_cover/z5D0wytPKWngLmpCOFgNJmUDq2TMjE4s1AdribZ5NZNRd7khjuxQEFA/300?n=1" alt="" width="140px" height="140px"/></a>
                                <a href="" className="wenzi1">直抵心灵深处的欧美伤感女嗓</a>
                            <div className="bofang1">
                                <div className="iconfont icon-erji erji"></div>
                                <div className="redu">186万</div>
                                <div ><a href="" className="iconfont icon-bofang"> </a></div>
                            </div></li>
                                <li className="tu7"><a href=""/><a href=""><img src="https://p.qpic.cn/music_cover/PiajxSqBRaEJXMiaRsKhiaxAjaNu8Ul3cvOCrH7t5znqwRKAYyULaeusg/600?n=1" alt="" width="140px" height="140px"/></a>
                                <a href="" className="wenzi1">『好听的翻唱Cover集</a>
                            <div className="bofang1">
                                <div className="iconfont icon-erji erji"></div>
                                <div className="redu">387万</div>
                                <div ><a href="" className="iconfont icon-bofang"> </a></div>
                            </div></li>
                                <li className="tu8"><a href=""/><a href=""><img src="https://p.qpic.cn/music_cover/CjVf5rxsS4NoAiah0xG5trQib7Rs8110ED4Oa52HHF7tgfQnGFn96E5w/300?n=1" alt="" width="140px" height="140px"/></a>
                                <a href="" className="wenzi1">『1w+热评』欧美万评撩耳男声（单曲循环）</a>
                            <div className="bofang1">
                                <div className="iconfont icon-erji erji"></div>
                                <div className="redu">452万</div>
                                <div ><a href="" className="iconfont icon-bofang"> </a></div>
                            </div></li>
                            </ul>
                        </div>
                </div>
                <div className="d2">
                    <div className="d21">
                        <div className="dd1">
                            <ul>
                                <li className="iconfont icon-iconfont911yuanhuanbiaoqian-copy yuan"></li>
                                <li className="re"><a href="">新碟上架</a></li>
                                <li className="geng"><a href="">更多</a></li>
                                <li className="iconfont icon-you xiangyou"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d22">
                        <div className="zhuanji">
                            <ul>
                                <li className="geshou1">
                                    <a href="" className="zjt"><img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000001gFZk946ZT2L.jpg?max_age=2592000" alt="" width="100px" height="100px" className="fenmian"/></a>
                                    <a href="" className="zjt"><img src="../../../public/%WZ6VEWDW(BUS{ZFNKWY6FV.png" alt="" className="guangdie" height="100px"/></a>
                                    <a href="" className="geming">好奇的猫</a>
                                    <a href="" className="renming">胡66</a>
                                </li>
                                <li className="geshou2">
                                    <a href="" className="zjt"><img src="https://p2.music.126.net/kv3niTzcfmffM2Q44nMelw==/109951164189258550.jpg?param=177y177" alt="" width="100px" height="100px" className="fenmian"/></a>
                                    <a href="" className="zjt"><img src="../../../%WZ6VEWDW(BUS{ZFNKWY6FV.png" alt="" className="guangdie" height="100px"/></a>
                                    <a href="" className="geming">Lights/Boy With...</a>
                                    <a href="" className="renming">BTS(防弹少年团)</a>
                                </li>
                                <li className="geshou3">
                                    <a href="" className="zjt"><img src="http://p1.music.126.net/YR6liIH1VbGZye2-_0m3Pg==/109951164174488087.jpg?param=177y177" alt="" width="100px" height="100px" className="fenmian"/></a>
                                    <a href="" className="zjt"><img src="%WZ6VEWDW(BUS{ZFNKWY6FV.png" alt="" className="guangdie" height="100px"/></a>
                                    <a href="" className="geming">Uh-Oh</a>
                                    <a href="" className="renming">(G)I-DLE</a>
                                </li>
                                <li className="geshou4">
                                    <a href="" className="zjt"><img src="http://p4.music.126.net/mCoo2pFU6O8xJFdIAt36Aw==/109951164157242369.jpg?param=100y100" alt="" width="100px" height="100px" className="fenmian"/>
                                        <div className="bofang2">
                                            <a href="" className="iconfont icon-bofang"></a>
                                        </div>
                                    </a>
                                    <a href="" className="zjt"><img src="%WZ6VEWDW(BUS{ZFNKWY6FV.png" alt="" className="guangdie" height="100px"/></a>
                                    <a href="" className="geming">Trust Myself</a>
                                    <a href="" className="renming">袁娅维  /  Gallant</a>
                                </li>
                                <li className="geshou5">
                                    <a href="" className="zjt"><img src="http://p4.music.126.net/dT5Xa_b16fWriJt4HHaoIA==/109951164146756014.jpg?param=100y100" alt="" width="100px" height="100px" className="fenmian"/></a>
                                    <a href="" className="zjt"><img src="%WZ6VEWDW(BUS{ZFNKWY6FV.png" alt="" className="guangdie" height="100px"/></a>
                                    <a href="" className="geming">光之海 (Live合唱版)</a>
                                    <a href="" className="renming">A-Lin/王晰/...</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="d3">
                    <div className="dd1">
                            <ul>
                                <li className="iconfont icon-iconfont911yuanhuanbiaoqian-copy yuan"></li>
                                <li className="re"><a href="">榜单</a></li>
                                <li className="geng"><a href="">更多</a></li>
                                <li className="iconfont icon-you xiangyou"></li>
                            </ul>
                    </div>
                    <div className="de2">
                        <ul>
                            <li className="bangdan1">
                                <a href="" className="biaosheng"><img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100" alt="" width="80px" height="80px"/></a>
                                <a href="" className="bangming">云音乐飙升榜</a>
                                <a href="" className="iconfont icon-bofang bf"></a>
                                <a href="" className="iconfont icon-add-folder wjj"></a>
                            </li>
                            <li className="bangdan2">
                                <a href="" className="biaosheng"><img src="http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100" alt="" width="80px" height="80px"/></a>
                                <a href="" className="bangming">云音乐新歌榜</a>
                                <a href="" className="iconfont icon-bofang bf"></a>
                                <a href="" className="iconfont icon-add-folder wjj"></a>
                            </li>
                            <li className="bangdan3">
                                <a href="" className="biaosheng"><img src="http://p3.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100" alt="" width="80px" height="80px"/></a>
                                <a href="" className="bangming">网易原创歌曲榜</a>
                                <a href="" className="iconfont icon-bofang bf"></a>
                                <a href="" className="iconfont icon-add-folder wjj"></a>
                                
                            </li>
                        </ul>
                    </div>
                    <div className="last">
                        <div className="de3">
                        <ul>
                            <li className="danshu">
                                <div className="num1">1</div>
                                <div className="one"><a href="">祝你爱我到天荒地老</a></div>
                                <div className="bfgq">
                                <ul>
                                    <li className="iconfont icon-bofang1"></li>
                                    <li className="iconfont icon-jiashang"></li>
                                    <li className="iconfont icon-addfile"></li>
                                </ul>
                                </div>
                            </li>
                            <li>
                                <div className="num1">2</div>
                                <div className="one"><a href="">bad guy</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num1">3</div>
                                <div className="one"><a href="">无名之辈</a></div>
                            </li>
                            <li>
                                <div className="num2">4</div>
                                <div className="one"><a href="">春分十一年</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">5</div>
                                <div className="one"><a href="">牛奶面包</a></div>
                            </li>
                            <li>
                                <div className="num2">6</div>
                                <div className="one"><a href="">孽海记</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">7</div>
                                <div className="one"><a href="">恋音と雨空-Jazzy Rain REMIX-</a></div>
                            </li>
                            <li>
                                <div className="num2">8</div>
                                <div className="one"><a href="">山上雪</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">9</div>
                                <div className="one"><a href="">孤单心事</a></div>
                            </li>
                            <li>
                                <div className="num2">10</div>
                                <div className="one"><a href="">赤伶</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num3">
                                    <a href="">查看全部></a>
                                </div>
                            </li>
                        </ul>
                        </div>
                        <div className="de4">
                        <ul>
                            <li className="danshu">
                                <div className="num1">1</div>
                                <div className="one"><a href="">bad guy (with Justin Bieber)</a></div>
                            </li>
                            <li>
                                <div className="num1">2</div>
                                <div className="one"><a href="">得不到你</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num1">3</div>
                                <div className="one"><a href="">木偶人</a></div>
                            </li>
                            <li>
                                <div className="num2">4</div>
                                <div className="one"><a href="">Follow Me (Live)</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">5</div>
                                <div className="one"><a href="">酒过三巡(Cheers)</a></div>
                            </li>
                            <li>
                                <div className="num2">6</div>
                                <div className="one"><a href="">爱不由我</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">7</div>
                                <div className="one"><a href="">那女孩对我说</a></div>
                            </li>
                            <li>
                                <div className="num2">8</div>
                                <div className="one"><a href="">叮叮梆梆 (Live)</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">9</div>
                                <div className="one"><a href="">逆流 (Live)</a></div>
                            </li>
                            <li>
                                <div className="num2">10</div>
                                <div className="one"><a href="">给未来</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num3">
                                    <a href="">查看全部></a>
                                </div>
                            </li>
                        </ul>
                        </div>
                        <div className="de5">
                        <ul>
                            <li className="danshu">
                                <div className="num1">1</div>
                                <div className="one"><a href="">迷宫</a></div>
                            </li>
                            <li>
                                <div className="num1">2</div>
                                <div className="one"><a href="">杨花落尽子规啼</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num1">3</div>
                                <div className="one"><a href="">平行线</a></div>
                            </li>
                            <li>
                                <div className="num2">4</div>
                                <div className="one"><a href="">我不会再去相信你了</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">5</div>
                                <div className="one"><a href="">夏夏</a></div>
                            </li>
                            <li>
                                <div className="num2">6</div>
                                <div className="one"><a href="">luv letter</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">7</div>
                                <div className="one"><a href="">同窗</a></div>
                            </li>
                            <li>
                                <div className="num2">8</div>
                                <div className="one"><a href="">夏日有脾气</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num2">9</div>
                                <div className="one"><a href="">门</a></div>
                            </li>
                            <li>
                                <div className="num2">10</div>
                                <div className="one"><a href="">城门开（Demo）</a></div>
                            </li>
                            <li className="danshu">
                                <div className="num3">
                                    <a href="">查看全部></a>
                                </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dive">
                <div className="dive1">
                    <div className="e1">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
                    <div className="e2"><a href="">用户登录</a></div>
                </div>
                <div className="dive2">
                    <ul>
                        <li className="ruzhu"><a href="">入驻歌手</a></li>
                        <li className="chakan"><a href="">查看全部></a></li>
                    </ul>
                </div>
                <div className="dive3">
                    <div className="zhanghuimei">
                        <div className="dive3tx1"><a href=""><img src="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" alt=""/></a></div>
                        <div className="dive3mz1"><a href="">张惠妹aMEI</a></div>
                        <div className="dive3js1"><a href="">台湾歌手张惠妹</a></div>
                    </div>
                    <div className="fine">
                        <div className="dive3tx"><a href=""><img src="http://p2.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=180y180" alt="" width="62px" height="62px"/></a></div>
                        <div className="dive3mz"><a href="">Fine乐团</a></div>
                        <div className="dive3js"><a href="">独立音乐人</a></div>
                    </div>
                    <div className="zhaolei">
                        <div className="dive3tx"><a href=""><img src="http://p1.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=180y180" alt="" width="62px" height="62px"/></a></div>
                        <div className="dive3mz"><a href="">音乐人赵雷</a></div>
                        <div className="dive3js"><a href="">民谣歌手</a></div>
                    </div>
                    <div className="wangsanbo">
                        <div className="dive3tx"><a href=""><img src="http://p2.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=180y180" alt="" width="62px" height="62px"/></a></div>
                        <div className="dive3mz"><a href="">王三溥</a></div>
                        <div className="dive3js"><a href="">音乐人</a></div>
                    </div>
                    <div className="wangxiao">
                        <div className="dive3tx"><a href=""><img src="http://p2.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=180y180" alt="" width="62px" height="62px"/></a></div>
                        <div className="dive3mz"><a href="">萬曉利</a></div>
                        <div className="dive3js"><a href="">民谣歌手，中国现...</a></div>
                    </div>
                    <div className="yinyueren"><a href="">申请成为网易音乐人</a></div>
                    </div>
                    <div className="dive4">
                        <div className="zhubo">热门主播</div>
                        <div className="chenli">
                            <div className="dive4tx"><a href=""><img src="http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt="" width="40px" height="40px"/></a></div>
                            <div className="dive4mz">
                                <a href="">陈立</a>
                                <a href="" className="iconfont icon-V renzheng"></a>
                            </div>
                            <div className="dive4js"><a href="">心理学家、美食家陈立教授</a></div>
                        </div>
                        <div className="yanqiu">
                            <div className="dive4tx"><a href=""><img src="http://p2.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg?param=40y40" alt="" width="40px" height="40px"/></a></div>
                            <div className="dive4mz">
                                <a href="">DJ艳秋</a>
                                <a href="" className="iconfont icon-V renzheng"></a>
                            </div>
                            <div className="dive4js"><a href="">著名音乐节目主持人</a></div>
                        </div>
                        <div className="gudian">
                            <div className="dive4tx"><a href=""><img src="http://p2.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg?param=40y40" alt="" width="40px" height="40px"/></a></div>
                            <div className="dive4mz">
                                <a href="">国家大剧院古典音乐频道</a>
                                <a href="" className="iconfont icon-V renzheng"></a>
                            </div>
                            <div className="dive4js"><a href="">国家大剧院古典音乐官方</a></div>
                        </div>
                        <div className="xiexie">
                            <div className="dive4tx"><a href=""><img src="http://p2.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40" alt="" width="40px" height="40px"/></a></div>
                            <div className="dive4mz">
                                <a href="">谢谢收听</a>
                                <a href="" className="iconfont icon-V renzheng"></a>
                            </div>
                            <div className="dive4js"><a href="">南京电台主持人王馨</a></div>
                        </div>
                        <div className="xiaosu">
                            <div className="dive4tx"><a href=""><img src="http://p2.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg?param=40y40" alt="" width="40px" height="40px"/></a></div>
                            <div className="dive4mz">
                                <a href="">DJ晓苏</a>
                                <a href="" className="iconfont icon-V renzheng"></a>
                            </div>
                            <div className="dive4js"><a href="">独立DJ，CRI环球旅游广播</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="bottom">
            <div className="bottom1">
                <div className="bt1">
                    <ul>
                    <li><a href="">服务条款</a></li>
                    <li>|</li>
                    <li><a href="">隐私政策</a></li>
                    <li>|</li>
                    <li><a href="">版权投诉指引</a></li>
                    <li>|</li>
                    <li><a href="">意见反馈</a></li>
                    <li>|</li>
                </ul>
                </div>
                <div className="bt2">
                    <ul>
                        <li className="bt21">网易公司版权所有©1997-2019</li>
                        <li>杭州乐读科技有限公司运营:</li>
                        <li><a href="">浙网文[2018]3506-263号</a></li>
                    </ul>
                </div>
                <div className="bt3">
                    <ul>
                        <li className="bt21">违法和不良信息举报电话：0571-89853516</li>
                        <li>举报邮箱：</li>
                        <li><a href="">ncm5990@163.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom2">
                <ul>
                        <li className="zuihou1">
                            <a href=""><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUwLjIgKDU1MDQ3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lupXpg6gt55So5oi36K6k6K+BPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjA2LWljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDA5LjAwMDAwMCwgLTI4NTQuMDAwMDAwKSIgZmlsbD0iI0NDQ0NDQyI+CiAgICAgICAgICAgIDxnIGlkPSLlupXpg6gt55So5oi36K6k6K+BIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDA5LjAwMDAwMCwgMjg1NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMiwwLjAwMDEgQzM0LjE1LDAuMDAwMSA0NCw5Ljg1MDEgNDQsMjIuMDAwMSBDNDQsMzQuMTUwMSAzNC4xNSw0NC4wMDAxIDIyLDQ0LjAwMDEgQzkuODUsNDQuMDAwMSAwLDM0LjE1MDEgMCwyMi4wMDAxIEMwLDkuODUwMSA5Ljg1LDAuMDAwMSAyMiwwLjAwMDEgWiBNMjIsNDIuMDAwMSBDMzMuMDQ2LDQyLjAwMDEgNDIsMzMuMDQ2MSA0MiwyMi4wMDAxIEM0MiwxMC45NTQxIDMzLjA0NiwyLjAwMDEgMjIsMi4wMDAxIEMxMC45NTQsMi4wMDAxIDIsMTAuOTU0MSAyLDIyLjAwMDEgQzIsMzMuMDQ2MSAxMC45NTQsNDIuMDAwMSAyMiw0Mi4wMDAxIFogTTIyLjAwMSw5IEMyMi4xODEsOSAyMi4zNjEsOS4wNTkgMjIuNTA5LDkuMTc3IEwyNC4yOTQsMTAuNTg2IEMyNi4wMDgsMTEuOTM5IDI4LjM5MSwxMi43MTQgMzAuODM0LDEyLjcxNCBDMzEuNTc0LDEyLjcxNCAzMi4zMTIsMTIuNjQ1IDMzLjAzMiwxMi41MDYgQzMzLjA4NCwxMi40OTYgMzMuMTM3LDEyLjQ5IDMzLjE4OSwxMi40OSBDMzMuMzc2LDEyLjQ5IDMzLjU1OCwxMi41NTUgMzMuNzA0LDEyLjY3NCBDMzMuODkxLDEyLjgyNiAzNCwxMy4wNTIgMzQsMTMuMjkxIEwzNCwyNS4wNjIgQzM0LDI4LjU0MSAzMS42NTQsMzEuNzU0IDI3Ljg3NiwzMy40NDUgTDIyLjMzNCwzNS45MjggQzIyLjIzMiwzNS45NzcgMjIuMTE4LDM2IDIyLjAwMywzNiBDMjEuODg4LDM2IDIxLjc3MywzNS45NzcgMjEuNjY2LDM1LjkyOCBMMTYuMTI0LDMzLjQ0NSBDMTIuMzQ2LDMxLjc1NCAxMCwyOC41NDEgMTAsMjUuMDYyIEwxMCwxMy4yOTEgQzEwLDEzLjA1MiAxMC4xMDksMTIuODI2IDEwLjI5NiwxMi42NzQgQzEwLjQ0MywxMi41NTUgMTAuNjI2LDEyLjQ5MSAxMC44MTMsMTIuNDkxIEMxMC44NjUsMTIuNDkxIDEwLjkxNywxMi40OTYgMTAuOTY4LDEyLjUwNiBDMTEuNjg4LDEyLjY0NSAxMi40MjcsMTIuNzE0IDEzLjE2NiwxMi43MTQgQzE1LjYwOSwxMi43MTQgMTcuOTkyLDExLjkzOCAxOS43MDcsMTAuNTg2IEwyMS40OTEsOS4xNzcgQzIxLjY0MSw5LjA1OSAyMS44MjEsOSAyMi4wMDEsOSBaIE0yMi4wMDEsMTEuMzIzIEwyMC45NDYsMTIuMTU1IEMxOC44ODMsMTMuNzgxIDE2LjA0OCwxNC43MTQgMTMuMTY2LDE0LjcxNCBDMTIuNzc2LDE0LjcxNCAxMi4zODYsMTQuNjk3IDEyLDE0LjY2NSBMMTIsMjUuMDYyIEMxMiwyNy43NDMgMTMuODk0LDMwLjI1NiAxNi45NDEsMzEuNjIgTDIyLDMzLjg4NiBMMjcuMDU5LDMxLjYyIEMzMC4xMDcsMzAuMjU2IDMyLDI3Ljc0MyAzMiwyNS4wNjIgTDMyLDE0LjY2NCBDMzEuNjEzLDE0LjY5NyAzMS4yMjQsMTQuNzE0IDMwLjgzNCwxNC43MTQgQzI3Ljk0OSwxNC43MTQgMjUuMTEzLDEzLjc4MSAyMy4wNTUsMTIuMTU1IEwyMi4wMDEsMTEuMzIzIFogTTI4LjcwNzI1LDE4LjI5MzI1IEMyOS4wOTgyNSwxOC42ODQyNSAyOS4wOTgyNSwxOS4zMTYyNSAyOC43MDcyNSwxOS43MDcyNSBMMjEuNzA3MjUsMjYuNzA3MjUgQzIxLjUxMjI1LDI2LjkwMjI1IDIxLjI1NjI1LDI3LjAwMDI1IDIxLjAwMDI1LDI3LjAwMDI1IEMyMC43NDQyNSwyNy4wMDAyNSAyMC40ODgyNSwyNi45MDIyNSAyMC4yOTMyNSwyNi43MDcyNSBMMTYuMjkzMjUsMjIuNzA3MjUgQzE1LjkwMjI1LDIyLjMxNjI1IDE1LjkwMjI1LDIxLjY4NDI1IDE2LjI5MzI1LDIxLjI5MzI1IEMxNi42ODQyNSwyMC45MDIyNSAxNy4zMTYyNSwyMC45MDIyNSAxNy43MDcyNSwyMS4yOTMyNSBMMjEuMDAwMjUsMjQuNTg2MjUgTDI3LjI5MzI1LDE4LjI5MzI1IEMyNy42ODQyNSwxNy45MDIyNSAyOC4zMTYyNSwxNy45MDIyNSAyOC43MDcyNSwxOC4yOTMyNSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""/></a>
                            <div>用户认证</div>
                        </li>
                        <li className="zuihou2">
                            <a href=""><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7ni6znq4vpn7PkuZDkurppY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlupXpg6jkv6Hmga8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDcwLjAwMDAwMCwgLTMwLjAwMDAwMCkiIGZpbGw9IiNDQ0NDQ0MiPgogICAgICAgICAgICA8ZyBpZD0i5Y+z5L6naWNvbiI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDY3LjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IueLrOeri+mfs+S5kOS6uiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLni6znq4vpn7PkuZDkurppY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMiw0Mi4wMDAxIEMxMC45NTQsNDIuMDAwMSAyLDMzLjA0NjEgMiwyMi4wMDAxIEMyLDEwLjk1NDEgMTAuOTU0LDIuMDAwMSAyMiwyLjAwMDEgQzMzLjA0NiwyLjAwMDEgNDIsMTAuOTU0MSA0MiwyMi4wMDAxIEM0MiwzMy4wNDYxIDMzLjA0Niw0Mi4wMDAxIDIyLDQyLjAwMDEgTTIyLDAuMDAwMSBDOS44NSwwLjAwMDEgMCw5Ljg1MDEgMCwyMi4wMDAxIEMwLDM0LjE1MDEgOS44NSw0NC4wMDAxIDIyLDQ0LjAwMDEgQzM0LjE1LDQ0LjAwMDEgNDQsMzQuMTUwMSA0NCwyMi4wMDAxIEM0NCw5Ljg1MDEgMzQuMTUsMC4wMDAxIDIyLDAuMDAwMSIgaWQ9IkZpbGwtMSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyLDI1LjAwMDEgQzIwLjM0MywyNS4wMDAxIDE5LDIzLjY1NzEgMTksMjIuMDAwMSBDMTksMjAuMzQzMSAyMC4zNDMsMTkuMDAwMSAyMiwxOS4wMDAxIEMyMy42NTcsMTkuMDAwMSAyNSwyMC4zNDMxIDI1LDIyLjAwMDEgQzI1LDIzLjY1NzEgMjMuNjU3LDI1LjAwMDEgMjIsMjUuMDAwMSBNMjIsMTcuMDAwMSBDMTkuMjM5LDE3LjAwMDEgMTcsMTkuMjM5MSAxNywyMi4wMDAxIEMxNywyNC43NjExIDE5LjIzOSwyNy4wMDAxIDIyLDI3LjAwMDEgQzI0Ljc2MSwyNy4wMDAxIDI3LDI0Ljc2MTEgMjcsMjIuMDAwMSBDMjcsMTkuMjM5MSAyNC43NjEsMTcuMDAwMSAyMiwxNy4wMDAxIiBpZD0iRmlsbC0zIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjIsMzYgQzE0LjI4LDM2IDgsMjkuNzIgOCwyMiBDOCwyMS40NDggNy41NTIsMjEgNywyMSBDNi40NDgsMjEgNiwyMS40NDggNiwyMiBDNiwzMC44MjIgMTMuMTc4LDM4IDIyLDM4IEMyMi41NTIsMzggMjMsMzcuNTUyIDIzLDM3IEMyMywzNi40NDggMjIuNTUyLDM2IDIyLDM2IiBpZD0iRmlsbC01Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjIsNiBDMjEuNDQ4LDYgMjEsNi40NDggMjEsNyBDMjEsNy41NTIgMjEuNDQ4LDggMjIsOCBDMjkuNzIsOCAzNiwxNC4yOCAzNiwyMiBDMzYsMjIuNTUyIDM2LjQ0OCwyMyAzNywyMyBDMzcuNTUyLDIzIDM4LDIyLjU1MiAzOCwyMiBDMzgsMTMuMTc4IDMwLjgyMiw2IDIyLDYiIGlkPSJGaWxsLTciPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt=""/></a>
                            <div>独立认证</div>
                        </li>
                        <li className="zuihou3">
                            <a href=""><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7otZ7otY9pY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLlupXpg6jkv6Hmga8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzUyLjAwMDAwMCwgLTMwLjAwMDAwMCkiIGZpbGw9IiNDQ0NDQ0MiPgogICAgICAgICAgICA8ZyBpZD0i5Y+z5L6naWNvbiI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDY3LjAwMDAwMCwgMzAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iui1nui1jyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjg1LjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLDMzIEwxNCwzMyBDMTcuODY2LDMzIDIxLDMwLjc2MSAyMSwyOCBMMjEsMjYgTDE1LDI2IEwxNSwzMSBDMTUsMzEuNTUyIDE0LjU1MiwzMiAxNCwzMiBDMTMuNDQ4LDMyIDEzLDMxLjU1MiAxMywzMSBMMTMsMjUgQzEzLDI0LjQ0OCAxMy40NDgsMjQgMTQsMjQgTDMwLDI0IEMzMC41NTIsMjQgMzEsMjQuNDQ4IDMxLDI1IEwzMSwzMSBDMzEsMzEuNTUyIDMwLjU1MiwzMiAzMCwzMiBDMjkuNDQ4LDMyIDI5LDMxLjU1MiAyOSwzMSBMMjksMjYgTDIzLDI2IEwyMywyOSBDMjMsMjkuMTA5IDIyLjk3LDI5LjIwOCAyMi45MzgsMjkuMzA3IEwzMS4yODIsMzMuMDk4IEMzMS44MywzMy4yNjYgMzIuMTI3LDMzLjgxOCAzMS45NDcsMzQuMzMgQzMxLjc2NywzNC44NDIgMzEuMTc3LDM1LjEyIDMwLjYzLDM0Ljk1MSBMMjIuMDU4LDMxLjA1NiBDMjAuNzkzLDMzLjA2NCAxOC4zNTQsMzQuNTQ0IDE1LjQxMywzNC45MDUgQzE1LjI4NywzNC45NjMgMTUuMTQ5LDM1IDE1LDM1IEwxMywzNSBDMTIuNDQ4LDM1IDEyLDM0LjU1MiAxMiwzNCBDMTIsMzMuNDQ4IDEyLjQ0OCwzMyAxMywzMyBaIE0xNywyMSBMMjcsMjEgTDI3LDE5IEwxNywxOSBMMTcsMjEgWiBNMTcsMjMgQzE1Ljg5NiwyMyAxNSwyMi4xMDUgMTUsMjEgTDE1LDE5IEMxNSwxNy44OTUgMTUuODk2LDE3IDE3LDE3IEwyNywxNyBDMjguMTA1LDE3IDI5LDE3Ljg5NSAyOSwxOSBMMjksMjEgQzI5LDIyLjEwNSAyOC4xMDUsMjMgMjcsMjMgTDE3LDIzIFogTTMxLDIxIEMzMC40NDgsMjEgMzAsMjAuNTUyIDMwLDIwIEwzMCwxNiBMMTQsMTYgTDE0LDIwIEMxNCwyMC41NTIgMTMuNTUyLDIxIDEzLDIxIEMxMi40NDgsMjEgMTIsMjAuNTUyIDEyLDIwIEwxMiwxNSBDMTIsMTQuNDQ4IDEyLjQ0OCwxNCAxMywxNCBMMTYuNTM1LDE0IEwxNS4yNTIsMTIuNjIyIEMxNC44NjMsMTIuMjA0IDE0LjkyMywxMS41ODEgMTUuMzg3LDExLjIzIEMxNS44NSwxMC44OCAxNi41NDIsMTAuOTM0IDE2LjkzMSwxMS4zNTIgTDE5LjM5NiwxNCBMMjEsMTQgTDIxLDExIEMyMSwxMC40NDggMjEuNDQ4LDEwIDIyLDEwIEMyMi41NTIsMTAgMjMsMTAuNDQ4IDIzLDExIEwyMywxNCBMMjQuNjA0LDE0IEwyNy4wNjksMTEuMzUyIEMyNy40NTgsMTAuOTM0IDI4LjE1LDEwLjg4IDI4LjYxMywxMS4yMyBDMjkuMDc3LDExLjU4MSAyOS4xMzcsMTIuMjA0IDI4Ljc0OCwxMi42MjIgTDI3LjQ2NSwxNCBMMzEsMTQgQzMxLjU1MiwxNCAzMiwxNC40NDggMzIsMTUgTDMyLDIwIEMzMiwyMC41NTIgMzEuNTUyLDIxIDMxLDIxIFogTTIyLDIgQzEwLjk1NCwyIDIsMTAuOTU0IDIsMjIgQzIsMzMuMDQ2IDEwLjk1NCw0MiAyMiw0MiBDMzMuMDQ2LDQyIDQyLDMzLjA0NiA0MiwyMiBDNDIsMTAuOTU0IDMzLjA0NiwyIDIyLDIgWiBNMjIsNDQgQzkuODUsNDQgMCwzNC4xNSAwLDIyIEMwLDkuODUgOS44NSwwIDIyLDAgQzM0LjE1LDAgNDQsOS44NSA0NCwyMiBDNDQsMzQuMTUgMzQuMTUsNDQgMjIsNDQgWiIgaWQ9Iui1nui1j2ljb24iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt=""/></a>
                            <div>赞赏</div>
                        </li>
                        <li className="zuihou4">
                            <a href=""><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjIgKDU3NTE5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuW6lemDqOS/oeaBryIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0NDYuMDAwMDAwLCAtMzAuMDAwMDAwKSIgZmlsbD0iI0NDQ0NDQyI+CiAgICAgICAgICAgIDxnIGlkPSLlj7PkvqdpY29uIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNjcuMDAwMDAwLCAzMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3OS4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04LDMxIEwxMSwzMSBMMTEsMjggTDgsMjggTDgsMzEgWiBNMzQsMzEgTDM3LDMxIEwzNywyOCBMMzQsMjggTDM0LDMxIFogTTgsMjQgTDExLDI0IEwxMSwyMSBMOCwyMSBMOCwyNCBaIE0zNCwyNCBMMzcsMjQgTDM3LDIxIEwzNCwyMSBMMzQsMjQgWiBNMTksMjYgTDE5LDE4IEwyNiwyMiBMMTksMjYgWiBNMTcuOTk5MjkzNiwxNSBDMTcuNDc4NzAzNSwxNSAxNywxNS40MTc1OTY2IDE3LDE2LjAwMzQzMzUgTDE3LDI3Ljk5NjU2NjUgQzE3LDI4LjU4MjQwMzQgMTcuNDc4NzAzNSwyOSAxNy45OTkyOTM2LDI5IEMxOC4xNjk4MzE3LDI5IDE4LjM0NDM1OSwyOC45NTQ5MzU2IDE4LjUwODkxMzQsMjguODU2Nzk1NCBMMjguNTEzODE2NywyMi44NjAyMjg5IEMyOS4xNjIwNjExLDIyLjQ3MTY3MzggMjkuMTYyMDYxMSwyMS41MjgzMjYyIDI4LjUxMzgxNjcsMjEuMTQwNzcyNSBMMTguNTA4OTEzNCwxNS4xNDMyMDQ2IEMxOC4zNDQzNTksMTUuMDQ1MDY0NCAxOC4xNjk4MzE3LDE1IDE3Ljk5OTI5MzYsMTUgWiBNOCwxNyBMMTEsMTcgTDExLDE0IEw4LDE0IEw4LDE3IFogTTM0LDE3IEwzNywxNyBMMzcsMTQgTDM0LDE0IEwzNCwxNyBaIE0yMiw0MiBDMTAuOTcyLDQyIDIsMzMuMDI4IDIsMjIgQzIsMTAuOTcyIDEwLjk3MiwyIDIyLDIgQzMzLjAyOCwyIDQyLDEwLjk3MiA0MiwyMiBDNDIsMzMuMDI4IDMzLjAyOCw0MiAyMiw0MiBaIE0yMiwwIEM5Ljg1LDAgMCw5Ljg1IDAsMjIgQzAsMzQuMTUgOS44NSw0NCAyMiw0NCBDMzQuMTUsNDQgNDQsMzQuMTUgNDQsMjIgQzQ0LDkuODUgMzQuMTUsMCAyMiwwIFoiIGlkPSJGaWxsLTEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt=""/></a>
                            <div>视频奖励</div>
                        </li>
                </ul>
            </div>
        </div>
            </div>
        )
    }
}

export default App;