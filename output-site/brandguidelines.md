# Brand Guidelines

Brand Guidelines, inspired by Dustin Curtis's [Open Brand](http://dcurt.is/the-open-brand), are used to develop brand definitions that can be used properly and referenced consistently by teammembers of any level of design experience.

Directory structure should include `png/`, `psd/`, `spec/`, `svg/` and `ai/` folders within the root directory `[BRAND-NAME]_identity`.

For an example of an Open Brand in use, see [The Markdown Mark](http://github.com/dcurtis/markdown-mark).

***

#### [ Main header. Include a banner image showing the spec and two common sizes of the brand here. ]

# [ Write the name of the brand here. ]

Use this mark to identify [brand name]. It should be used to identify [ write list of places to use this mark for identification. See "Examples" for more information. ]. If you are absolutely unable to use an image to display the [brand name], use this Unicode approximation: [ Show a Unicode approximation, if applicable. ]. See "Usage".

[ Include a list of attributions and sources here, including the creators of the mark. ]

## Specification

[ Include an image file of the brand specification, as described in `spec/README`, here. ]

Let the [ chosen visual anchor, see `spec/README` ] be X. The internal whitespace between [ list other items which are spaced by X ] should be precisely X. [ Write more definitions for the spec here, if necessary. Be specific. ]

## Usage

You should use this mark to identify [ Write list of places to use this mark for identification. See "Examples" for more information. Use the same language as in the introduction above. ]. Although you may modify this mark any way you like, without restriction, please respect the following guidelines: 

[ Numbered list of restrictions and guidelines. See "Examples" for more information. ]

### Unicode Approximation

If you cannot use an image for the [brand name], use this Unicode approximation: 

__[ Unicode approximation ]__

Do not use this Unicode approximation unless you are absolutely unable to use an image to display the [brand name].

## Examples

[ Include a numbered list of at least 5 example use cases for the brand here. ]



# png/ Directory
Pixel-fitting is a difficult task which requires unusual skills. Non-designers should be discouraged, at all costs, from improperly resizing the brand without performing pixel-fitting. Including usable PNG images will be both convenient and serve to prevent improper resizing of the brand.

## Usable PNG images

Include [pixel-fitted](http://dcurt.is/pixel-fitting) PNG images at approximately the following sizes, for each identified major style:

A. 30px wide
B. 40px wide
C. 50px wide
D. 65px wide
E. 200px wide
F. 1664px wide

Include copies of these PNG images with as many colors as necessary. 


# psd/ Directory
For compatibility reasons, use a PSD document as the primary source for the brand definition. Many non-designers do not have Illustrator or other vector manipulation tools, and the PSD format is widely accepted and used.

# Vectorized PSD document

Include a single Photoshop PSD document which contains vector shapes corresponding to every included PNG image size. Also include a vector shape in the PSD that is precisely equivalent to the file in the "spec" folder.

# spec/ Directory
No one should ever attempt to recreate the brand; use this specification document to make it clear that this brand is designed very particularly and its usage should be controlled. 

# Brand Specifications

Include a single vectorized specification image (preferably in PSD format) that describes visual requirements needed to recreate the brand properly. Define the size/width/height of the most important visual anchor as X, and specify every other element's size and relationship using values of X. 

Distances of X should be green (#84c82c). Distances of less than X should be red (#e66666). Distances of more than X should be brown (#c8802c).

Do not include any raw software-controlled typography; convert all type to shapes (if including a Photoshop document). 

# svg/ Directory
The Scalable Vector Graphics format is an open, universal vector format that integrates well with source control software. It is extensible and widely supported on all platforms. SVG graphics can be used in Illustrator, Photoshop, Gimp, and other common image manipulation software. 

# SVG Vector Image Definitions

Include SVG vector definitions for the brand, logo, and logotype, with a default size equal to the PNG image that corresponds most closely with E in the PSD README file (200px width). 

# ai/ Directory
The original vector files used by the graphic artist to create the brand. These should not ever be directly edited by anyone other than the author.  Files in this directory serve as a redundant backup of the original artwork.

