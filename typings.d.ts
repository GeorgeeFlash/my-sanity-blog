import { SanityDocument } from "next-sanity";

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Post {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: MainImage;
    slug: Slug;
    title: string;
    description: string;
};

// interface Author extends Base {
//     bio: Block[];
//     image: PostImage;
//     name: string;
//     slug: Slug;
// };

// interface PostImage {
//     _type: "image";
//     alt: string;
//     asset: Reference;
// };

interface Reference {
    _ref: string;
    _type: "reference";
};

interface Slug {
    _type: "slug";
    current: string;
};

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
};

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
};

interface Category extends Base {
    description: string;
    title: string;
}

// interface MainImage {
//     _type: "image";
//     asset: Reference;
// }

interface Title {
    _type: "string";
    current: string;
}

export type PostSanityDocument = SanityDocument<Post>;