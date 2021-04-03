//import { connect } from "react-redux";
import {
  formulateMediaUrl,
  formulateCourseUrl,
  getBackendAddress,
} from "../../../lib/utils.js";
import { makeStyles, Grid } from "@material-ui/core";
import Head from "next/head";
import FetchBuilder from "../../../lib/fetch.js";
//import { addressProps, siteInfoProps } from "../../../types.js";
import dynamic from "next/dynamic";

const BaseLayout = dynamic(() =>
  import("../../../components/Public/BaseLayout")
);
const Article = dynamic(() => import("../../../components/Public/Article.js"));

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
}))

const Post = (props) => {
  const classes = useStyles();
  const articleOptions = {
    showAttribution: true,
  };

  return (
    <BaseLayout title={props.post?.title}>
      {props.post && (
        <Grid item xs={12} className={classes.content}>
          <Head>
            <meta
              property="og:url"
              content={formulateCourseUrl(props.post,
                props?.address?.frontend || 'localhost:8000'
              )}
            />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={props.post.title} />
            {/** TODO: re-enable the following meta tag once SSR is supported */}
            {/* <meta
              property="og:description"
              content={getPostDescriptionSnippet(props.post.description)}
            /> */}
            <meta property="og:author" content={props.post.creatorName} />
            {props.post.featuredImage && (
              <meta
                property="og:image"
                content={formulateMediaUrl(
                  props?.address?.frontend || 'localhost:8000',
                  props.post.featuredImage
                )}
              />
            )}
          </Head>
          <Article course={props.post} options={articleOptions} />
        </Grid>
      )}
    </BaseLayout>
  );
}

const generateQuery = (pageOffset = 1) => `
  query {
    courses: getPosts(offset: ${pageOffset}) {
      id,
      title,
      description,
      updated,
      creatorName,
      slug,
      featuredImage,
      courseId
    }
  }
`;
const getCourses = async (backend = 'http://localhost:8000') => {
  console.log(backend, 'backendbackend')
  let courses = [];
  try {
    const fetch = new FetchBuilder()
      .setUrl(`${backend}/graph`)
      .setPayload(generateQuery())
      .setIsGraphQLEndpoint(true)
      .build();
    const response = await fetch.exec();
    courses = response.courses;
  } catch (e) { }
  return courses;
};

export const getStaticPaths = async () => {
  const post = await getCourses()
  return {
    paths: post?.map(data => ({ params: { id: data?.courseId.toString(), slug: data?.slug } })),
    fallback: true, //SE A PAGINA NÃO EXISTIR ENTÃO, GERAR NOVAMENTE
  };
};

export async function getStaticProps({ params }) {
  const graphQuery = `
    query {
      post: getCourse(courseId: ${params.id}) {
          id,
          title,
          description,
          featuredImage,
          updated,
          creatorName,
          creatorId,
          slug,
          isBlog,
          courseId,
      }
    }
  `;
  const fetch = new FetchBuilder()
    //.setUrl(`${getBackendAddress(req?.headers.host)}/graph`)
    .setUrl(`${'http://localhost:8000'}/graph`)
    .setPayload(graphQuery)
    .setIsGraphQLEndpoint(true)
    .build();

  let post = null;
  try {
    const response = await fetch.exec();
    post = response.post;
  } catch (err) {
    post = {
      title: err.message,
    };
  }
  return {
    props: {
      post,
    },
  };
}



//export async function getServerSideProps({ query, req }) {
//  //export async function getStaticProps({ params }) {
//  console.log('queryquery', query)
//  console.log(`${getBackendAddress(req?.headers.host)}/graph`, 'howtst')
//  const graphQuery = `
//      query {
//        post: getCourse(courseId: ${query.id}) {
//            id,
//            title,
//            description,
//            featuredImage,
//            updated,
//            creatorName,
//            creatorId,
//            slug,
//            isBlog,
//            courseId,
//        }
//      }
//    `;
//  const fetch = new FetchBuilder()
//    .setUrl(`${getBackendAddress(req?.headers.host)}/graph`)
//    //.setUrl(`${'localhost:3002'}/graph`)
//    .setPayload(graphQuery)
//    .setIsGraphQLEndpoint(true)
//    .build();

//  let post = null;
//  try {
//    const response = await fetch.exec();
//    post = response.post;
//  } catch (err) {
//    post = {
//      title: err.message,
//    };
//  }

//  return {
//    props: {
//      post,
//    },
//  };
//}



//Post.propTypes = {
//  siteInfo: siteInfoProps,
//  address: addressProps,
//};
//const mapStateToProps = (state) => ({siteInfo: state.siteinfo,address: state.address,});
//export default connect(mapStateToProps)(Post);
export default Post;
