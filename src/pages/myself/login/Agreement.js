import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import globalStyle from '../../../../assets/nativeStyles/global';
import Goback from '../../../common/Goback';
import styles from './styles';

export default class Agreement extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: '用户协议',
    headerTitleStyle: globalStyle.black15,
    headerLeft: <Goback navigation={navigation}/>,
  });



  render() {
    return (
      <View style={styles.pView}>
        <ScrollView scrollIndicatorInsets={{right: -3}}>
          <Text style={styles.pTitle}>用户协议</Text>
          <View style={styles.pReturn} />
          <Text style={styles.pSubTitle}>提示条款</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎您与各艺魅平台经营者（详见定义条款）共同签署本《艺魅平台服务协议》（下称“本协议”）并使用艺魅平台服务！</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本协议为《艺魅服务协议》修订版本，自本协议发布之日起，艺魅平台各处所称“艺魅服务协议”均指本协议。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;各服务条款前所列索引关键词仅为帮助您理解该条款表达的主旨之用，不影响或限制本协议条款的含义或解释。为维护您自身权益，建议您仔细阅读各条款具体表述。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【审慎阅读】您在申请注册流程中点击同意本协议之前，应当认真阅读本协议。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗体下划线标识，您应重点阅读。如您对协议有任何疑问，可向艺魅平台客服咨询。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【签约动作】当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，即表示您已充分阅读、理解并接受本协议的全部内容，并与艺魅达成一致，成为艺魅平台“用户”。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止注册程序。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>一、 定义</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅平台：指包括艺魅网（域名为pgtartcentre.com）等网站及客户端。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅：艺魅平台经营者的单称或合称，包括上海艺魅咖啡画廊发展股份有限公司等。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅平台服务：艺魅基于互联网，以包含艺魅平台网站、客户端等在内的各种形态（包括未来技术发展出现的新的服务形态）向您提供的各项服务。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅平台规则：包括在所有艺魅平台规则频道内已经发布及后续发布的全部规则、解读、公告等内容以及各平台在帮派、论坛、帮助中心内发布的各类规则、实施细则、产品流程说明、公告等。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅网规则：艺魅网规则频道列明的各项规则，具体详见。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅平台：指包括艺魅网等网站及客户端。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;关联公司：除艺魅外艺魅平台的经营者的单称或合称。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同一用户：使用同一身份认证信息或经艺魅排查认定多个艺魅账户的实际控制人为同一人的，均视为同一用户。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>二、 协议范围</Text>
          <Text style={styles.pContent}>2.1 签约主体</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【平等主体】本协议由您与艺魅平台经营者共同缔结，本协议对您与艺魅平台经营者均具有合同效力。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【主体信息】艺魅平台经营者是指经营艺魅平台的各法律主体，您可随时查看艺魅平台各网站首页底部公示的证照信息以确定与您履约的艺魅主体。本协议项下，艺魅平台经营者可能根据艺魅平台的业务调整而发生变更，变更后的艺魅平台经营者与您共同履行本协议并向您提供服务，艺魅平台经营者的变更不会影响您本协议项下的权益。艺魅平台经营者还有可能因为提供新的艺魅平台服务而新增，如您使用新增的艺魅平台服务的，视为您同意新增的艺魅平台经营者与您共同履行本协议。发生争议时，您可根据您具体使用的服务及对您权益产生影响的具体行为对象确定与您履约的主体及争议相对方。</Text>
          <Text style={styles.pContent}>2.2 补充协议</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于互联网高速发展，您与艺魅签署的本协议列明的条款并不能完整罗列并覆盖您与艺魅所有权利与义务，现有的约定也不能保证完全符合未来发展的需求。因此，艺魅平台法律声明及隐私权政策、艺魅平台规则均为本协议的补充协议，与本协议不可分割且具有同等法律效力。如您使用艺魅平台服务，视为您同意上述补充协议。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>三、 账户注册与使用</Text>
          <Text style={styles.pContent}>3.1 用户资格</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您确认，在您开始注册程序使用艺魅平台服务前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的一切后果。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，您还需确保您不是任何国家、国际组织或者地域实施的贸易限制、制裁或其他法律、规则限制的对象，否则您可能无法正常注册及使用艺魅平台服务。</Text>
          <Text style={styles.pContent}>3.2 账户说明</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【账户获得】当您按照注册页面提示填写信息、阅读并同意本协议且完成全部注册程序后，您可获得艺魅平台账户并成为艺魅平台用户。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅平台只允许每位用户使用一个艺魅平台账户。如有证据证明或艺魅根据艺魅平台规则判断您存在不当注册或不当使用多个艺魅平台账户的情形，艺魅平台可采取冻结或关闭账户、取消订单、拒绝提供服务等措施，如给艺魅平台及相关方造成损失的，您还应承担赔偿责任。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【账户使用】您有权使用您设置或确认的艺魅会员名、邮箱、手机号码（以下简称“账户名称”）及您设置的密码（账户名称及密码合称“账户”）登录艺魅平台。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您有权使用您的艺魅账户登录艺魅平台而无需另行设置账户，但您的艺魅账户于2018年12月1日前注册或者您注册艺魅账户时所使用的邮箱或手机号码已在平台注册或使用过的除外。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于您的艺魅账户关联您的个人信息及艺魅平台商业信息，您的艺魅账户仅限您本人使用。未经艺魅平台同意，您直接或间接授权第三方使用您艺魅账户或获取您账户项下信息的行为无效。如艺魅根据艺魅平台规则中约定的违约认定程序及标准判断您艺魅账户的使用可能危及您的账户安全及/或艺魅平台信息安全的，艺魅平台可拒绝提供相应服务或终止本协议。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【账户转让】由于用户账户关联用户信用信息，仅当有法律明文规定、司法裁定或经艺魅同意，并符合艺魅平台规则规定的用户账户转让流程的情况下，您可进行账户的转让。您的账户一经转让，该账户项下权利义务一并转移。除此外，您的账户不得以任何方式转让，否则艺魅平台有权追究您的违约责任，且由此产生的一切责任均由您承担。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【实名认证】作为艺魅平台经营者，为使您更好地使用艺魅平台的各项服务，保障您的账户安全，艺魅可要求您按艺魅公司要求及我国法律规定完成实名认证。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【不活跃账户回收】如您的账户同时符合以下条件，则艺魅可回收您的账户，您的账户将不能再登录任一艺魅平台，相应服务同时终止：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）未绑定通过实名认证的艺魅账户；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）连续六个月未用于登录任一艺魅平台；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）不存在未到期的有效业务。</Text>
          <Text style={styles.pContent}>3.3 注册信息管理</Text>
          <Text style={styles.pContent}>3.3.1 真实合法</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【信息真实】在使用艺魅平台服务时，您应当按艺魅平台页面的提示准确完整地提供您的信息（包括您的姓名及电子邮件地址、联系电话、联系地址等），以便艺魅或其他用户与您联系。您了解并同意，您有义务保持您提供信息的真实性及有效性。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【会员名的合法性】您设置的艺魅会员名不得违反国家法律法规及艺魅网规则关于会员名的管理规定，否则艺魅可回收您的艺魅会员名。艺魅会员名的回收不影响您以邮箱、手机号码登录艺魅平台并使用艺魅平台服务。</Text>
          <Text style={styles.pContent}>3.3.2 更新维护</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您应当及时更新您提供的信息，在法律有明确规定要求艺魅作为平台服务提供者必须对部分用户（如平台卖家等）的信息进行核实的情况下，艺魅将依法不时地对您的信息进行检查核实，您应当配合提供最新、真实、完整、有效的信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如艺魅按您最后一次提供的信息与您联系未果、您未按艺魅的要求及时提供信息、您提供的信息存在明显不实或行政司法机关核实您提供的信息无效的，您将承担因此对您自身、他人及艺魅造成的全部损失与不利后果。艺魅可向您发出询问或要求整改的通知，并要求您进行重新认证，直至中止、终止对您提供部分或全部艺魅平台服务，艺魅对此不承担责任。</Text>
          <Text style={styles.pContent}>3.4 账户安全规范</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【账户安全保管义务】您的账户为您自行设置并由您保管，艺魅任何时候均不会主动要求您提供您的账户密码。因此，建议您务必保管好您的账户，并确保您在每个上网时段结束时退出登录并以正确步骤离开艺魅平台。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;账户因您主动泄露或因您遭受他人攻击、诈骗等行为导致的损失及后果，艺魅并不承担责任，您应通过司法、行政等救济途径向侵权行为人追偿。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【账户行为责任自负】除艺魅存在过错外，您应对您账户项下的所有行为结果（包括但不限于在线签署各类协议、发布信息、购买商品及服务及披露信息等）负责。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【日常维护须知】如发现任何未经授权使用您账户登录艺魅平台或其他可能导致您账户遭窃、遗失的情况，建议您立即通知艺魅，并授权艺魅将该信息同步给艺魅及艺魅平台。您理解艺魅对您的任何请求采取行动均需要合理时间，且艺魅应您请求而采取的行动可能无法避免或阻止侵害后果的形成或扩大，除艺魅存在法定过错外，艺魅不承担责任。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>四、 艺魅平台服务及规范</Text>
          <Text style={styles.pContent}>【服务概况】您有权在艺魅平台上享受店铺管理、商品及/或服务的销售与推广、商品及/或服务的购买与评价、交易争议处理等服务。艺魅提供的服务内容众多，具体您可登录艺魅平台浏览。</Text>
          <Text style={styles.pContent}>4.1 店铺管理</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【店铺创建】通过在艺魅网创建店铺，您可发布全新或二手商品及/或服务信息并与其他用户达成交易。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于艺魅网管理需要，您理解并认可，同一用户在艺魅网仅能开设一家店铺，艺魅可关闭您在艺魅网同时开设的其他店铺。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【店铺转让】由于店铺与账户的不可分性，店铺转让实质为店铺经营者账户的转让，店铺转让的相关要求与限制请适用本协议3.2条账户转让条款。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【店铺关停】如您通过下架全部商品短暂关停您的店铺，您应当对您店铺关停前已达成的交易继续承担发货、退换货及质保维修、维权投诉处理等交易保障责任。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在您的店铺连续六周无出售中的商品的情况下，艺魅也可依据艺魅网规则关停您的店铺。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;依据上述约定关停店铺均不会影响您已经累积的信用。</Text>
          <Text style={styles.pContent}>4.2 商品及/或服务的销售与推广</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【商品及/或服务信息发布】通过艺魅提供的服务，您有权通过文字、图片、视频、音频等形式在艺魅平台上发布商品及/或服务信息、招揽和物色交易对象、达成交易。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【禁止销售范围】您应当确保您对您在艺魅平台上发布的商品及/或服务享有相应的权利，您不得在艺魅平台上销售以下商品及/或提供以下服务：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）国家禁止或限制的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）侵犯他人知识产权或其它合法权益的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）艺魅平台规则、公告、通知或各平台与您单独签署的协议中已明确说明不适合在艺魅平台上销售及/或提供的。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【交易秩序保障】您应当遵守诚实信用原则，确保您所发布的商品及/或服务信息真实、与您实际所销售的商品及/或提供的服务相符，并在交易过程中切实履行您的交易承诺。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您应当维护艺魅平台市场良性竞争秩序，不得贬低、诋毁竞争对手，不得干扰艺魅平台上进行的任何交易、活动，不得以任何不正当方式提升或试图提升自身的信用度，不得以任何方式干扰或试图干扰艺魅平台的正常运作。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【促销及推广】您有权自行决定商品及/或服务的促销及推广方式，艺魅亦为您提供了形式丰富的促销推广工具。您的促销推广行为应当符合国家相关法律法规及艺魅平台的要求。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【依法纳税】依法纳税是每一个公民、企业应尽的义务，您应对销售额/营业额超过法定免征额部分及时、足额地向税务主管机关申报纳税。</Text>
          <Text style={styles.pContent}>4.3 商品及/或服务的购买与评价</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【商品及/或服务的购买】当您在艺魅平台购买商品及/或服务时，请您务必仔细确认所购商品的品名、价格、数量、型号、规格、尺寸或服务的时间、内容、限制性要求等重要事项，并在下单时核实您的联系地址、电话、收货人等信息。如您填写的收货人非您本人，则该收货人的行为和意思表示产生的法律后果均由您承担。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的购买行为应当基于真实的消费需求，不得存在对商品及/或服务实施恶意购买、恶意维权等扰乱艺魅平台正常交易秩序的行为。基于维护艺魅平台交易秩序及交易安全的需要，艺魅发现上述情形时可主动执行关闭相关交易订单等操作。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【一口价与拍卖】艺魅平台存在“一口价”和“拍卖”两种出价形式。在拍卖形式下，您理解艺魅平台并非《中华人民共和国拍卖法》规定的“拍卖人”， 艺魅平台仅为用户以竞价形式购买商品及/或服务的在线交易场所。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【评价】您有权在艺魅平台提供的评价系统中对与您达成交易的其他用户商品及/或服务进行评价。您应当理解，您在艺魅平台的评价信息是公开的，如您不愿意在评价信息中向公众披露您的身份信息，您有权选择通过匿名形式发表评价内容。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您的所有评价行为应遵守艺魅平台规则的相关规定，评价内容应当客观真实，不应包含任何污言秽语、色情低俗、广告信息及法律法规与本协议列明的其他禁止性信息；您不应以不正当方式帮助他人提升信用或利用评价权利对其他用户实施威胁、敲诈勒索。艺魅可按照艺魅平台规则的相关规定对您实施上述行为所产生的评价信息进行删除或屏蔽。</Text>
          <Text style={styles.pContent}>4.4 交易争议处理</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【交易争议处理途径】您在艺魅平台交易过程中与其他用户发生争议的，您或其他用户中任何一方均有权选择以下途径解决：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）与争议相对方自主协商；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）使用艺魅平台提供的争议调处服务；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）请求消费者协会或者其他依法成立的调解组织调解；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）向有关行政部门投诉；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）根据与争议相对方达成的仲裁协议（如有）提请仲裁机构仲裁；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）向人民法院提起诉讼。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【平台调处服务】如您依据艺魅平台规则使用艺魅平台的争议调处服务，则表示您认可并愿意履行艺魅平台的客服或大众评审员（“调处方”）作为独立的第三方根据其所了解到的争议事实并依据艺魅平台规则所作出的调处决定（包括调整相关订单的交易状态、判定将争议款项的全部或部分支付给交易一方或双方等）。在艺魅平台调处决定作出前，您可选择上述（三）、（四）、（五）、（六）途径（下称“其他争议处理途径”）解决争议以中止艺魅平台的争议调处服务。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如您对调处决定不满意，您仍有权采取其他争议处理途径解决争议，但通过其他争议处理途径未取得终局决定前，您仍应先履行调处决定。</Text>
          <Text style={styles.pContent}>4.5 费用</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅为艺魅平台向您提供的服务付出了大量的成本，除艺魅平台明示的收费业务外，艺魅向您提供的服务目前是免费的。如未来艺魅向您收取合理费用，艺魅会采取合理途径并以足够合理的期限提前通过法定程序并以本协议第八条约定的方式通知您，确保您有充分选择的权利。</Text>
          <Text style={styles.pContent}>4.6 责任限制</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【不可抗力及第三方原因】艺魅依照法律规定履行基础保障义务，但对于下述原因导致的合同履行障碍、履行瑕疵、履行延后或履行内容变更等情形，艺魅并不承担相应的违约责任：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）因自然灾害、罢工、暴乱、战争、政府行为、司法行政命令等不可抗力因素；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）因电力供应故障、通讯网络故障等公共服务因素或第三人因素；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）在艺魅已尽善意管理的情况下，因常规或紧急的设备与系统维护、设备与系统故障、网络信息与数据安全等因素。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【海量信息】艺魅仅向您提供艺魅平台服务，您了解艺魅平台上的信息系用户自行发布，且可能存在风险和瑕疵。艺魅将通过依法建立相关检查监控制度尽可能保障您在艺魅平台上的合法权益及良好体验。同时，鉴于艺魅平台具备存在海量信息及信息网络环境下信息与实物相分离的特点，艺魅无法逐一审查商品及/或服务的信息，无法逐一审查交易所涉及的商品及/或服务的质量、安全以及合法性、真实性、准确性，对此您应谨慎判断。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【调处决定】您理解并同意，在争议调处服务中，艺魅平台的客服、大众评审员并非专业人士，仅能以普通人的认知对用户提交的凭证进行判断。因此，除存在故意或重大过失外，调处方对争议调处决定免责。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>五、 用户信息的保护及授权</Text>
          <Text style={styles.pContent}>5.1 个人信息的保护</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅非常重视用户个人信息（即能够独立或与其他信息结合后识别用户身份的信息）的保护，在您使用艺魅提供的服务时，您同意艺魅按照在艺魅平台上公布的隐私权政策收集、存储、使用、披露和保护您的个人信息。如艺魅平台网站或客户端未设独立隐私权政策但使用了艺魅网账号登陆相应网站或客户端的，为保护您的隐私权，我们将参照适用艺魅网隐私权政策的要求对您的个人信息进行收集、存储、使用、披露和保护。艺魅希望通过隐私权政策向您清楚地介绍艺魅对您个人信息的处理方式，因此艺魅建议您完整地阅读隐私权政策（点击此处），以帮助您更好地保护您的隐私权。</Text>
          <Text style={styles.pContent}>5.2 非个人信息的保证与授权</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【信息的发布】您声明并保证，您对您所发布的信息拥有相应、合法的权利。否则，艺魅可对您发布的信息依法或依本协议进行删除或屏蔽。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【禁止性信息】您应当确保您所发布的信息不包含以下内容：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）违反国家法律法规禁止性规定的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）政治宣传、封建迷信、淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）欺诈、虚假、不准确或存在误导性的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）侵犯他人知识产权或涉及第三方商业秘密及其他专有权利的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）侮辱、诽谤、恐吓、涉及他人隐私等侵害他人合法权益的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）存在可能破坏、篡改、删除、影响艺魅平台任何系统正常运行或未经授权秘密获取艺魅平台及其他用户的数据、个人资料的病毒、木马、爬虫等恶意软件、程序代码的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（七）其他违背社会公共利益或公共道德或依据相关艺魅平台协议、规则的规定不适合在艺魅平台上发布的。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【授权使用】对于您提供、发布及在使用艺魅平台服务中形成的除个人信息外的文字、图片、视频、音频等非个人信息，在法律规定的保护期限内您免费授予艺魅及其关联公司、艺魅公司获得全球排他的许可使用权利及再授权给其他第三方使用并可以自身名义对第三方侵权行为取证及提起诉讼的权利。您同意艺魅及其关联公司、艺魅公司存储、使用、复制、修订、编辑、发布、展示、翻译、分发您的非个人信息或制作其派生作品，并以已知或日后开发的形式、媒体或技术将上述信息纳入其它作品内。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为方便您使用艺魅平台、艺魅等其他相关服务，您授权艺魅将您在账户注册和使用艺魅平台服务过程中提供、形成的信息传递给艺魅平台、艺魅等其他相关服务提供者，或从艺魅平台、艺魅等其他相关服务提供者获取您在注册、使用相关服务期间提供、形成的信息。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>六、 用户的违约及处理</Text>
          <Text style={styles.pContent}>6.1 违约认定</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发生如下情形之一的，视为您违约：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）使用艺魅平台服务时违反有关法律法规规定的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）违反本协议或本协议补充协议（即本协议第2.2条）约定的。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为适应电子商务发展和满足海量用户对高效优质服务的需求，您理解并同意，艺魅可在艺魅平台规则中约定违约认定的程序和标准。如：艺魅可依据您的用户数据与海量用户数据的关系来认定您是否构成违约；您有义务对您的数据异常现象进行充分举证和合理解释，否则将被认定为违约。</Text>
          <Text style={styles.pContent}>6.2 违约处理措施</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【信息处理】您在艺魅平台上发布的信息构成违约的，艺魅可根据相应规则立即对相应信息进行删除、屏蔽处理或对您的商品进行下架、监管。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【行为限制】您在艺魅平台上实施的行为，或虽未在艺魅平台上实施但对艺魅平台及其用户产生影响的行为构成违约的，艺魅可依据相应规则对您执行账户扣分、限制参加营销活动、中止向您提供部分或全部服务、划扣违约金等处理措施。如您的行为构成根本违约的，艺魅可查封您的账户，终止向您提供服务。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【艺魅账户处理】当您违约的同时存在欺诈、售假、盗用他人账户等特定情形或您存在危及他人交易安全或账户安全风险时，艺魅会依照您行为的风险程度指示艺魅公司对您的艺魅账户采取取消收款、资金止付等强制措施。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【处理结果公示】艺魅可将对您上述违约行为处理措施信息以及其他经国家行政或司法机关生效法律文书确认的违法信息在艺魅平台上予以公示。</Text>
          <Text style={styles.pContent}>6.3 赔偿责任</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如您的行为使艺魅及/或其关联公司、艺魅公司遭受损失（包括自身的直接经济损失、商誉损失及对外支付的赔偿金、和解款、律师费、诉讼费等间接经济损失），您应赔偿艺魅及/或其关联公司、艺魅公司的上述全部损失。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如您的行为使艺魅及/或其关联公司、艺魅公司遭受第三人主张权利，艺魅及/或其关联公司可在对第三人承担金钱给付等义务后就全部损失向您追偿。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如因您的行为使得第三人遭受损失或您怠于履行调处决定、艺魅及/或其关联公司出于社会公共利益保护或消费者权益保护目的，可指示艺魅公司自您的艺魅账户中划扣相应款项进行支付。如您的艺魅余额或保证金不足以支付相应款项的，您同意委托艺魅使用自有资金代您支付上述款项，您应当返还该部分费用并赔偿因此造成艺魅的全部损失。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您同意艺魅自您的艺魅账户中划扣相应款项支付上述赔偿款项。如您艺魅账户中的款项不足以支付上述赔偿款项的，艺魅及/或关联公司可直接抵减您在艺魅及/或其关联公司其它协议项下的权益，并可继续追偿。</Text>
          <Text style={styles.pContent}>6.4 特别约定</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【商业贿赂】如您向艺魅及/或其关联公司的雇员或顾问等提供实物、现金、现金等价物、劳务、旅游等价值明显超出正常商务洽谈范畴的利益，则可视为您存在商业贿赂行为。发生上述情形的，艺魅可立即终止与您的所有合作并向您收取违约金及/或赔偿金，该等金额以艺魅因您的贿赂行为而遭受的经济损失和商誉损失作为计算依据。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【关联处理】如您因严重违约导致艺魅终止本协议时，出于维护平台秩序及保护消费者权益的目的，艺魅及/或其关联公司可对与您在其他协议项下的合作采取中止甚或终止协议的措施，并以本协议第八条约定的方式通知您。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如艺魅与您签署的其他协议及艺魅及/或其关联公司、艺魅公司与您签署的协议中明确约定了对您在本协议项下合作进行关联处理的情形，则艺魅出于维护平台秩序及保护消费者权益的目的，可在收到指令时中止甚至终止协议，并以本协议第八条约定的方式通知您。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>七、 协议的变更</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅可根据国家法律法规变化及维护交易秩序、保护消费者权益需要，不时修改本协议、补充协议，变更后的协议、补充协议（下称“变更事项”）将通过法定程序并以本协议第八条约定的方式通知您。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如您不同意变更事项，您有权于变更事项确定的生效日前联系艺魅反馈意见。如反馈意见得以采纳，艺魅将酌情调整变更事项。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如您对已生效的变更事项仍不同意的，您应当于变更事项确定的生效之日起停止使用艺魅平台服务，变更事项对您不产生效力；如您在变更事项生效后仍继续使用艺魅平台服务，则视为您同意已生效的变更事项。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>八、 通知</Text>
          <Text style={styles.pContent}>8.1 有效联系方式</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您在注册成为艺魅平台用户，并接受艺魅平台服务时，您应该向艺魅提供真实有效的联系方式（包括您的电子邮件地址、联系电话、联系地址等），对于联系方式发生变更的，您有义务及时更新有关信息，并保持可被联系的状态。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您在注册艺魅平台用户时生成的用于登陆艺魅平台接收站内信、系统消息和艺魅旺旺即时信息的会员账号（包括子账号），也作为您的有效联系方式。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅将向您的上述联系方式的其中之一或其中若干向您送达各类通知，而此类通知的内容可能对您的权利义务产生重大的有利或不利影响，请您务必及时关注。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您有权通过您注册时填写的手机号码或者电子邮箱获取您感兴趣的商品广告信息、促销优惠等商业性信息；您如果不愿意接收此类信息，您有权通过艺魅提供的相应的退订功能进行退订。</Text>
          <Text style={styles.pContent}>8.2 通知的送达</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺魅通过上述联系方式向您发出通知，其中以电子的方式发出的书面通知，包括但不限于在艺魅平台公告，向您提供的联系电话发送手机短信，向您提供的电子邮件地址发送电子邮件，向您的账号发送旺旺信息、系统消息以及站内信信息，在发送成功后即视为送达；以纸质载体发出的书面通知，按照提供联系地址交邮后的第五个自然日即视为送达。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于在艺魅平台上因交易活动引起的任何纠纷，您同意司法机关（包括但不限于人民法院）可以通过手机短信、电子邮件或艺魅旺旺等现代通讯方式或邮寄方式向您送达法律文书（包括但不限于诉讼文书）。您指定接收法律文书的手机号码、电子邮箱或艺魅旺旺账号等联系方式为您在艺魅平台注册、更新时提供的手机号码、电子邮箱联系方式以及在注册艺魅用户时生成艺魅旺旺账号，司法机关向上述联系方式发出法律文书即视为送达。您指定的邮寄地址为您的法定联系地址或您提供的有效联系地址。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您同意司法机关可采取以上一种或多种送达方式向您达法律文书，司法机关采取多种方式向您送达法律文书，送达时间以上述送达方式中最先送达的为准。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您同意上述送达方式适用于各个司法程序阶段。如进入诉讼程序的，包括但不限于一审、二审、再审、执行以及督促程序等。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你应当保证所提供的联系方式是准确、有效的，并进行实时更新。如果因提供的联系方式不确切，或不及时告知变更后的联系方式，使法律文书无法送达或未及时送达，由您自行承担由此可能产生的法律后果。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>九、 协议的终止</Text>
          <Text style={styles.pContent}>9.1 终止的情形</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【用户发起的终止】您有权通过以下任一方式终止本协议：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）在满足艺魅网公示的账户注销条件时您通过网站自助服务注销您的账户的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）变更事项生效前您停止使用并明示不愿接受变更事项的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）您明示不愿继续使用艺魅平台服务，且符合艺魅网终止条件的。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【艺魅发起的终止】出现以下情况时，艺魅可以本协议第八条的所列的方式通知您终止本协议：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）您违反本协议约定，艺魅依据违约条款终止本协议的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）您盗用他人账户、发布违禁信息、骗取他人财物、售假、扰乱市场秩序、采取不正当手段谋利等行为，艺魅依据艺魅平台规则对您的账户予以查封的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（三）除上述情形外，因您多次违反艺魅平台规则相关规定且情节严重，艺魅依据艺魅平台规则对您的账户予以查封的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（四）您的账户被艺魅依据本协议回收的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（五）您在艺魅或艺魅平台有欺诈、发布或销售假冒伪劣/侵权商品、侵犯他人合法权益或其他严重违法违约行为的；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（六）其它应当终止服务的情况。</Text>
          <Text style={styles.pContent}>9.2 协议终止后的处理</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【用户信息披露】本协议终止后，除法律有明确规定外，艺魅无义务向您或您指定的第三方披露您账户中的任何信息。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【艺魅权利】本协议终止后，艺魅仍享有下列权利：</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（一）继续保存您留存于艺魅平台的本协议第五条所列的各类信息；</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（二）对于您过往的违约行为，艺魅仍可依据本协议向您追究违约责任。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【交易处理】本协议终止后，对于您在本协议存续期间产生的交易订单，艺魅可通知交易相对方并根据交易相对方的意愿决定是否关闭该等交易订单；如交易相对方要求继续履行的，则您应当就该等交易订单继续履行本协议及交易订单的约定，并承担因此产生的任何损失或增加的任何费用。</Text>
          <View style={styles.pReturn} />

          <Text style={styles.pSubTitle}>十、 法律适用、管辖与其他</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【法律适用】本协议之订立、生效、解释、修订、补充、终止、执行与争议解决均适用中华人民共和国大陆地区法律；如法律无相关规定的，参照商业惯例及/或行业惯例。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【管辖】您因使用艺魅平台服务所产生及与艺魅平台服务有关的争议，由艺魅与您协商解决。协商不成时，任何一方均可向被告所在地有管辖权的人民法院提起诉讼。</Text>
          <Text style={styles.pContent}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;【可分性】本协议任一条款被视为废止、无效或不可执行，该条应视为可分的且并不影响本协议其余条款的有效性及可执行性。</Text>
          <View style={styles.pReturn} />

        </ScrollView>
      </View>

    );
  }
}
